import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../component/home/home.component";
import { LoginComponent } from "../component/login/login.component";
import { RegisterComponent } from "../component/register/register.component";
import { DetailProductComponent } from "../component/detail-product/detail-product.component";
import { OrderComponent } from "../component/order/order.component";
import { OrderConfirmComponent } from "../component/order-confirm/order-confirm.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'products/:id', component: DetailProductComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'orders/:id', component: OrderConfirmComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}