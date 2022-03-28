import { Component, OnInit } from '@angular/core';


import { TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/Service/product.service';
import { CustomersService } from 'src/app/Service/customers.service';

import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from '../Models/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan.`;
  postList:IProduct[]=[];
  public productList : any ;
  errMsg:string=''
  listToggle:boolean=true;
  numberOfProducts: number = 0;
  shows: boolean = false;
  SortbyParam='';
  SortDirection='asc';
  SearchName='';
  constructor(private custom:CustomersService,private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router ,private cartService: CartService,private favoriteService : FavoriteService, private snakeBar: MatSnackBar) {
    

  }

  // idfind = 2;
  // prodlist: any;
  // prod: any;
  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe(postData=>{
      this.postList=postData
      console.log(this.postList)
    })    
    
  } 
  getProdDetails(id:number){
    this.router.navigate([id],{relativeTo:this.activatedRoute})

  }

addtocart(item: any){
  this.cartService.addtoCart(item)
  this.custom.addtocustomers(item)
  this.snakeBar.open("Added","", {duration:1000, panelClass:["bg-success","text-center"]})
  }




  addtofavorite(item: any){
    this.favoriteService.addtofavorite(item)
    this.snakeBar.open("Added","", {duration:1000, panelClass:["bg-success","text-center"]})
      }




toggleList(){
  this.listToggle=false
}
toggleGrid(){
  this.listToggle=true
} 
    // this.products.GetAllProducts().subscribe(
    //   productdata => {
    //     this.prodlist = productdata;
    //     console.log(this.prodlist)
    //   }
    // )
    // this.products.GetProductById(this.idfind).subscribe(
    //   product => {
    //     this.prod = product[this.idfind - 1]
    //   }
    // )
  }
  



