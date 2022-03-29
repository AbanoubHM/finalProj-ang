import { FilterPipe } from './../../pipes/filter.pipe';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { ProductService } from '../../Service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { CustomersService } from 'src/app/Service/customers.service';
import { GategoryService } from 'src/app/Service/gategory.service';
import { Icategory } from 'src/app/Models/Icategory';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { MatChip, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  show: boolean;
  postList: IProduct[] = [];
  gatlist: Icategory[] = [];
  public productsArray: IProduct[] = [];
  public productList: any;
  errMsg: string = '';
  listToggle: boolean = true;
  numberOfProducts: number = 0;
  SortbyParam = '';
  SortDirection = 'asc';
  searchvalues = '';
  SearchName = '';
  sortname: IProduct[] = [];
  typeselect: any;
  types: any[] = [
    { value: 'NA', viewValue: 'Names' },
    { value: 'ND', viewValue: 'NamesDescing' },
    { value: 'PA', viewValue: 'Price' },
    { value: 'PD', viewValue: 'PriceDescing' },
  ];
  public hideLoadMoreBtn = false;
  params = new HttpParams();
  activeCat: number = -1;
  constructor(
    public auth: AuthService,
    private gat: GategoryService,
    private custom: CustomersService,
    private activatedRoute: ActivatedRoute,
    private postSrv: ProductService,
    private router: Router,
    private cartService: CartService,
    private FavoriteService: FavoriteService,
    private snakeBar: MatSnackBar
  ) {
    this.show=false
  }
  ngOnInit(): void {
    // this.postSrv.getProductsBySortName();

    this.gat.getAllGatogaries().subscribe((gatilist) => {
      this.gatlist = gatilist;
    });
    this.postSrv.getAllPosts().subscribe(
      (postData) => {
        this.postList = postData;
        //console.log(this.postList);
        this.postList.forEach((element) => {
          this.numberOfProducts++;
        });
      },
      (error) => {
        this.errMsg = error;
      }
    );
  }
  getProdDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
    this.custom.addtocustomers(item);
    this.snakeBar.open('Added', '', {
      duration: 1000,
      panelClass: ['bg-success', 'text-center'],
    });
  }

  addtofavorite(item: any) {
    this.FavoriteService.addtofavorite(item);
    this.snakeBar.open('Added', '', {
      duration: 1000,
      panelClass: ['bg-success', 'text-center'],
    });
  }
  showitem() {
    this.show=!this.show

  }
  toggleList() {
    this.listToggle = false;
  }
  toggleGrid() {
    this.listToggle = true;
  }

  changeCat(id: any, c: MatChip) {
    //this.activeCat = i;
    c.select();
    this.params = this.params.set('categoryid', id);
    this.postSrv.getProductsBySortName(this.params).subscribe((prods) => {
      this.postList = prods;
    });
  }
  onKey(event: any) {
    this.searchvalues = event.target.value;
    try {
      this.params = this.params.set('search', this.searchvalues);
      this.postSrv.getProductsBySortName(this.params).subscribe((prods) => {
        this.postList = prods;
      });
    } catch (error) {
      console.log(error);
    }
    this.params = this.params.set('search', this.searchvalues);
    this.postSrv.getProductsBySortName(this.params).subscribe((prods) => {
      this.postList = prods;
    });
  }
  onValueChanged(event: any) {
    this.params = this.params.set('sort', event);

    this.postSrv.getProductsBySortName(this.params).subscribe((prods) => {
      this.postList = prods;
    });
  }
}
