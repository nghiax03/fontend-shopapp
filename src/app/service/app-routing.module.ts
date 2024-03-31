import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../component/home/home.component";
import { LoginComponent } from "../component/login/login.component";
import { RegisterComponent } from "../component/register/register.component";
import { DetailProductComponent } from "../component/detail-product/detail-product.component";
import { OrderComponent } from "../component/order/order.component";
import { OrderConfirmComponent } from "../component/order-confirm/order-confirm.component";
import { NgModule } from "@angular/core";

import { UserProfileComponent } from "../component/user-profile/user-profile.component";
import { AdminComponent } from "../admin/admin.component";
import { AdminGuardFn } from "../guards/admin.guard";
import { AuthGuardFn } from "../guards/auth.guard";
import { OrdersComponent } from "../admin/orders/orders.admin.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent , canActivate: [AdminGuardFn]},
    {path: 'register', component: RegisterComponent},
    {path: 'products/:id', component: DetailProductComponent},
    {path: 'orders', component: OrderComponent, canActivate: [AuthGuardFn]},
    {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardFn]},
    {path: 'orders/:id', component: OrderConfirmComponent},
    {
        path: 'admin/orders',
        component: OrdersComponent,
        canActivate: [AdminGuardFn]
      },
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}