import { FilterPipe } from './../../pipes/filter.pipe';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductService } from '../../Service/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { CustomersService } from 'src/app/Service/customers.service';
import { GategoryService } from 'src/app/Service/gategory.service';
import { Icategory } from 'src/app/Models/Icategory';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  postList: IProduct[] = [];
  gatlist: Icategory[] = [];
  public productsArray: IProduct[]=[];
  public productList : any ;
  errMsg:string=''
  listToggle:boolean=true;
  numberOfProducts: number = 0;
  shows: boolean = false;
  SortbyParam='';
  SortDirection='asc';

  SearchName = '';
  sortname: IProduct[] = [];
  typeselect:any;
  types: any[] = [
    {value: 'NA', viewValue: 'Names'},
    {value: 'ND', viewValue: 'NamesDescing'},
    {value: 'PA', viewValue: 'Price'},
    {value: 'PD', viewValue: 'PriceDescing'}
  
  ];


  constructor( private gat : GategoryService, private custom:CustomersService,private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router ,private cartService: CartService,private FavoriteService : FavoriteService, private snakeBar: MatSnackBar) { }
 
  










  ngOnInit(): void {
    // this.postSrv.getProductsBySortName();
  
    this.gat.getAllGatogaries().subscribe(gatilist => {

      this.gatlist=gatilist
    })
    this.postSrv.getAllPosts().subscribe(postData => {
      this.postList = postData
      console.log(this.postList)
      this.postList.forEach(element => {
        this.numberOfProducts++;

      });
    } ,
      error => {
        this.errMsg = error
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
    this.FavoriteService.addtofavorite(item)
    this.snakeBar.open("Added","", {duration:1000, panelClass:["bg-success","text-center"]})
      }




toggleList(){
  this.listToggle=false
}
toggleGrid(){
  this.listToggle=true
}
onNameFilter(){
//  this.postSrv.getProductsBySortName()
}
onValueChanged(event:any){
  console.log(event);
  switch (event) {
    case 'NA':
      // this.postSrv.getProductsBySortName(event).subscribe(postData => {
      //   this.productsArray = postData});
      break;
      case 'NA':
      
      break;
  
    default:
      break;
  }

}
}


