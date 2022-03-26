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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashComponent } from './components/dash/dash.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MystoreComponent } from './components/mystore/mystore.component';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './components/profile/profile.component';





const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartsComponent},

  {path: 'profile',
  component: ProfileComponent},
  {path:'logout',component:LogoutComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'favorite' , component:FavoriteComponent},
  {path:'AddProduct' , component:OrdersComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  {path:'MyProfile',component:DashComponent},
  {path:'contact' , component:ContactComponent},
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'MyStore', component: MystoreComponent },
  {path:'customers' , component:CustomersComponent},

  { path: '**', component: ErrorComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
