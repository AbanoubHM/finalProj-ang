import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../Service/favorite.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-favourite',
  templateUrl: './item-favourite.component.html',
  styleUrls: ['./item-favourite.component.scss']
})
export class ItemFavouriteComponent implements OnInit {

  


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
       this.ngOnInit()
        
      },
      error => {
        console.log('server id down', error);
      })
    }

   

}


