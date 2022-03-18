import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartsComponent } from './components/carts/carts.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartsComponent},
  { path: 'products', component: ProductsComponent },
  {path:'about' ,component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
