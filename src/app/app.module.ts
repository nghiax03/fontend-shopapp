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
          AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
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
