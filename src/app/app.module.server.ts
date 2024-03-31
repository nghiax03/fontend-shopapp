import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { OrderConfirmComponent } from './component/order-confirm/order-confirm.component';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './service/app-routing.module';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
