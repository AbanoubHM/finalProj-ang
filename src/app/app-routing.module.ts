import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './components/carts/carts.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { DashComponent } from './components/dash/dash.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MystoreComponent } from './components/mystore/mystore.component';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';




const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'become_Vendor', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartsComponent, canActivate: [AuthGuard] },
  { path: 'MyProfile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuard] },
  { path: 'AddProduct', component: OrdersComponent, canActivate: [AuthGuard], 
    data: {  role: 'ROLE_ADMIN' } },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'MyStore', component: MystoreComponent, canActivate: [AuthGuard] , 
    data: {role: 'ROLE_ADMIN'}},
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: ':Cateid/products', component: CategoryDetailsComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
