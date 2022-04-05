import { Component, OnInit } from '@angular/core';
import { CartService  } from '../../Service/cart.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})


export class ItemCartComponent implements OnInit {


  constructor(private CartService : CartService,
              public authService: AuthService,   
              public activatedRoute: ActivatedRoute,
              public router: Router,
              ) { }

product: any = [];
userId : any ;
count:number=1;

  ngOnInit(): void {
    console.log('cart') 

       this.authService.user$.subscribe((profile) => {   
        this.userId= profile?.sub
        this.CartService.getCartProducts(profile?.sub).subscribe(

      data => {
        this.product = data ;
        console.log(data)
      },
      
      error => {
        console.log('server id down', error);
      }     
  )    

  })}
  

  deleteHandel(ProductId:string) {
    console.log(ProductId , this.userId)
    this.CartService.removeCartItem( this.userId , ProductId ).subscribe(
      data => {
       console.log(data)
       this.ngOnInit()
        
      },
      error => {
        console.log('server id down', error);
      })
    }

    
   

}

