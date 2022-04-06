import { IProduct } from './../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { CartService } from 'src/app/Service/cart.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 1;
  count: number = 1;
  errMsg: string = '';
  prdId: any;
  userId:any ;
  prodDet: IProduct = {
    id: 0,
    name: '',
    description: '',
    image: '',
    price: 0,
    saleValue: 0,
    quantity: 0,
    preparationDays: 0,
    categoryID: 0,
    categoryName: '',
    category: '',
    storeID: '',
    store: '',
    orders: '',
    productRates: '',
  };
  constructor(
    public auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private postSrv: ProductService,
    private router: Router,
    private cartService: CartService,
    private snakeBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.prdId = params.get('id');
      this.getProdDetails();
    });
    this.auth.user$.subscribe((profile) => {
      this.userId = profile?.sub;
    });
  }
  getProdDetails() {
    this.postSrv.getProductById(this.prdId).subscribe(
      (prdData) => {
        this.prodDet = prdData;
      },
      (error) => {
        this.errMsg = error;
      }
    );
  }
  incCount() {
    this.count++;
  }
  decCount() {
    if (this.count <= 1) {
      this.count = 1;
    } else {
      this.count--;
    }
  }
  snakerbar(data: string, color: string) {
    this.snakeBar.open(data, '', {
      duration: 1000,
      panelClass: [color, 'text-center'],
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item.id, this.userId, this.count).subscribe(
      (res) => {
        console.log(res);
        this.snakerbar('added to the cart', `bg-success`);
      },
      (err) => {
        this.snakerbar('You must login first', `bg-error`);
      }
    );
  }
}
