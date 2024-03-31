import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { OrderComponent } from './component/order/order.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderConfirmComponent } from './component/order-confirm/order-confirm.component';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './service/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './admin/orders/orders.admin.component';
import { PoductAdminComponent } from './admin/product/poduct.admin.component';
import { CategoryAdminComponent } from './admin/category/category.admin.component';

@NgModule({
  declarations: [
    HomeComponent,
          HeaderComponent,
          FooterComponent,
          OrderComponent,
          OrderConfirmComponent,
          LoginComponent,
          RegisterComponent,
          DetailProductComponent,
          AppComponent,
          UserProfileComponent,
          AdminComponent,
          OrdersComponent,
          PoductAdminComponent,
          CategoryAdminComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
