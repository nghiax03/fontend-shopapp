import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { OrderDTO } from '../../dtos/order/order.dto';
import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';
import { TokenService } from '../../service/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { environment } from '../../environments/environment';
import { error } from 'console';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{
  orderForm: FormGroup;
  cartItems: { product: Product, quantity: number }[] = [];
  couponCode: string = '';
  totalAmount: number = 0;

  orderData: OrderDTO = {
    user_id: 1,
    fullname: '',
    phone_number: '',
    address: '',
    note: '',
    total_money: 0,
    payment_method: 'cod',
    shipping_method: 'express',
    coupon_code: '',
    cart_items: [],
    email: ''
  };
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){
    this.orderForm = this.formBuilder.group({
      fullname: ['Writer name xx', Validators.required], //form control bat buoc
      email: ['nghia3203@gmail.com',[Validators.email]],
      phone_number: ['12321321', [Validators.required, Validators.minLength(6)]],
      address: ['dia chi',[Validators.required, Validators.minLength(5)]],
      note: ['this is note'],
      shipping_method: ['express'],
      payment_method: ['cod']
    });
  }

  ngOnInit(): void{
    debugger;
    // this.cartService.clearCart();
    this.orderData.user_id = this.tokenService.getUserId();
    debugger;
    const cart = this.cartService.getCart();
    const productIds = Array.from(cart.keys());

    debugger
    if(productIds.length === 0){
      return;
    }
    this.productService.getProductByIds(productIds).subscribe({
      next: (products) => {
        debugger
        this.cartItems = productIds.map((productId) => {
          debugger
          const product = products.find((p) => p.id === productId);
          if(product){
            product.thumbnail = `${environment.apiBaseUrl}/products/images/${product.thumbnail}`;
          }
          return {
            product: product!,
            quantity: cart.get(productId)!
          };
        });
        console.log('hello');
      },
      complete: () => {
        debugger;
        this.calculateTotal()
      },
      error: (error: any) => {
        debugger;
        console.error('Error fetching detail: ', error);
      }
    });
  }

  placeOrder(){
    debugger
    if(this.orderForm.valid){
      this.orderData = {
        ...this.orderData,
        ...this.orderForm.value
      };
      this.orderData.cart_items = this.cartItems.map(cartItem => ({
        product_id: cartItem.product.id,
        quantity: cartItem.quantity
      }));

      this.orderService.placeOrder(this.orderData).subscribe({
        next: (response: Order) => {
          debugger;
          alert('Đặt hàng thành công');
          this.cartService.clearCart();
          this.router.navigate(['/']);
        },
        complete: () => {
          debugger;
          this.calculateTotal();
        },
        error: (error: any) => {
          debugger;
        alert(`Lỗi khi đặt hàng: ${error}`);
        },
      });
    }
    else{
      alert('Dữ liệu không hợp lệ vui lòng kiểm tra lại.');
    }
  }

  calculateTotal(): void{
    this.totalAmount = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  applyCoupon(): void{

  }
}
