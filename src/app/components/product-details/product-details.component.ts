import { IProduct } from './../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { CartService } from 'src/app/Service/cart.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  count:number=1
  errMsg:string=''
  prdId:any
  prodDet:IProduct={
    id:0,
    name: '',
    description: '',
    image:'',
    price: 0,
    saleValue:0,
    quantity: 0,
    preparationDays:0,
    categoryID: 0,
    categoryName: '',
    category: '',
    storeID: '',
    store: '',
    orders:'',
    productRates:''
  }
  constructor(private activatedRoute:ActivatedRoute,private postSrv:ProductService,private router:Router,private cartService: CartService , private snakeBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.prdId=params.get("id")
    this.getProdDetails()
    })
  }
  getProdDetails() {
    this.postSrv.getProductById(this.prdId).subscribe(prdData=>{
      this.prodDet=prdData},error=>{
        this.errMsg=error
      }
    )
  }
  incCount(){
    this.count++;
  }
  decCount(){
    if(this.count<=1){
      this.count=1;
    }else{
      this.count--;
    }
  }
  addtocart(item: any){
    this.cartService.addtoCart(item)
    this.snakeBar.open("Added","", {duration:1000, panelClass:["bg-success","text-center"]})
      }

}
