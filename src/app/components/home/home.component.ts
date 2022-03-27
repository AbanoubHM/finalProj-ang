import { Component, OnInit } from '@angular/core';

import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan.`;
  constructor(/*private products: ProductService*/) {


  }
  // idfind = 2;
  // prodlist: any;
  // prod: any;
  ngOnInit(): void {
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

}
