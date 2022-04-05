import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../Service/favorite.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})


export class ItemCartComponent implements OnInit {


  constructor(private FavoriteService : FavoriteService,
              public authService: AuthService,   
              public activatedRoute: ActivatedRoute,
              public router: Router,
              ) { }

product: any = [];
userId : any ;

  ngOnInit(): void {
    
      this.authService.user$.subscribe((profile) => {   
        this.userId= profile?.sub
      this.FavoriteService.getfevProducts(profile?.sub).subscribe(

      data => {
        this.product = data ;
      },
      
      error => {
        console.log('server id down', error);
      }     
  )    

  })}
  

  deleteHandel(ProductId:string) {
    console.log(ProductId , this.userId)
    this.FavoriteService.removefavoriteItem( this.userId , ProductId ).subscribe(
      data => {
       console.log(data)
       this.ngOnInit()
        
      },
      error => {
        console.log('server id down', error);
      })
    }

    // getProdDetails(id: number) {
    //   this.router.navigate( [id], { relativeTo: this.activatedRoute });
    // }

}

