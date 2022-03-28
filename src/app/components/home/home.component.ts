import { Component, OnInit } from '@angular/core';


import { TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/Service/product.service';
import { CustomersService } from 'src/app/Service/customers.service';

import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from '../Models/iproduct';
import { GategoryService } from 'src/app/Service/gategory.service';
import { Icategory } from 'src/app/Models/Icategory';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  
 

  postList:IProduct[]=[];
  public productList : any ;
  errMsg:string=''
  listToggle:boolean=true;
  numberOfProducts: number = 0;
  shows: boolean = false;
  SortbyParam='';
  SortDirection='asc';
  SearchName = '';
  gatlist: Icategory[] = [];
  images = [
    {title: 'First Slide', short: 'For all your occasions', src: "https://picsum.photos/id/700/900/500"},
    {title: 'Second Slide', short: 'we are with you and help you choose your gift and', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', short: 'will make it for you with love', src: "https://picsum.photos/id/984/900/500"}
  ];
   
  page: number = 1; 
  size: number = 9;
  // numElement: number = 10;

  constructor( config: NgbCarouselConfig, private gat:GategoryService,private custom:CustomersService,private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router ,private cartService: CartService,private favoriteService : FavoriteService, private snakeBar: MatSnackBar) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe(postData=>{
      this.postList=postData
      console.log(this.postList)
    })
    this.gat.getAllGatogaries().subscribe(gatilist => {

      this.gatlist=gatilist
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
Done(){
  this.postSrv.getAllPosts();
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




