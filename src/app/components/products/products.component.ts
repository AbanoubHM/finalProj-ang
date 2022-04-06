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
import { MatChip, MatChipInputEvent } from '@angular/material/chips';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  length: number = 100;
  pageSize: number = 12;
  pageSizeOptions: number[] = [12, 24, 48, 96];
  pageEvent?: PageEvent;
  show: boolean;
  postList: any;
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
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private FavoriteService: FavoriteService,
    private snakeBar: MatSnackBar,
    private activateroute: ActivatedRoute
  ) {
    this.show = false;
  }
  ngOnInit(): void {
    this.gat.getAllGatogaries().subscribe((gatilist) => {
      this.gatlist = gatilist;
    });

    this.productService.getAllProuduct().subscribe(
      (res) => {
        this.postList = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.auth.user$.subscribe((profile) => {
      this.userId = profile?.sub;
    });
  }

  userId: any;
  getProdDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  snakerbar(data: string, color: string) {
    this.snakeBar.open(data, '', {
      duration: 1000,
      panelClass: [color, 'text-center'],
    });
  }

  addtocart(item: any) {
    console.log('new  at cart');
    this.cartService.addtoCart(item.id, this.userId).subscribe(
      (res) => {
        console.log(res);
        this.snakerbar('added to the cart', `bg-success`);
      },
      (err) => {
        this.snakerbar('some thing wrong', `bg-error`);
      }
    );
  }

  addtofavorite(item: any) {
    this.FavoriteService.getfevProducts(this.userId).subscribe(
      (res) => {
        let data: any = res;

        if (data.every((el: any) => el.productID !== item.id)) {
          console.log('new');
          this.FavoriteService.addtofavorite(item.id, this.userId).subscribe(
            (res) => {
              this.snakerbar('added to the favorite', `bg-success`);
            },
            (err) => {
              this.snakerbar('some thing wrong', `bg-error`);
            }
          );
        } else {
          this.snakerbar('already in the favorite', `bg-error`);
        }
      },
      (error) => {
        console.log('server is down', error);
      }
    );
  }

  showitem() {
    this.show = !this.show;
  }
  toggleList() {
    this.listToggle = false;
  }
  toggleGrid() {
    this.listToggle = true;
  }
  changePage(event: PageEvent) {
    this.params = this.params.set('pagesize', event.pageSize);
    this.params = this.params.set('pagenumber', event.pageIndex + 1);
    this.productService
      .getProductsBySortName(this.params)
      .subscribe((prods) => {
        this.postList = prods;
      });
    return event;
  }

  changeCat(id: any, c: MatChip) {
    c.toggleSelected();
    if (!c.selected) {
      this.params = this.params.delete('categoryid');
    } else {
      this.params = this.params.set('categoryid', id);
    }
    this.productService
      .getProductsBySortName(this.params)
      .subscribe((prods) => {
        this.postList = prods;
      });
  }
  onKey(event: any) {
    this.searchvalues = event.target.value;
    try {
      this.params = this.params.set('search', this.searchvalues);
      this.productService
        .getProductsBySortName(this.params)
        .subscribe((prods) => {
          this.postList = prods;
        });
    } catch (error) {
      console.log(error);
    }
    this.params = this.params.set('search', this.searchvalues);
    this.productService
      .getProductsBySortName(this.params)
      .subscribe((prods) => {
        this.postList = prods;
      });
  }
  onValueChanged(event: any) {
    this.params = this.params.set('sort', event);

    this.productService
      .getProductsBySortName(this.params)
      .subscribe((prods) => {
        this.postList = prods;
      });
  }
}
