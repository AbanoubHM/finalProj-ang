import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../Service/favorite.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})


export class ItemCartComponent implements OnInit {

  constructor(private FavoriteService : FavoriteService,
              public authService: AuthService,   ) { }
              public product: any = [];



  ngOnInit(): void {
    
      this.authService.user$.subscribe((profile) => {    
      this.FavoriteService.getfevProducts(profile?.sub).subscribe(

      data => {
        this.product = data ;
        console.log("p" , this.product );
      },
      
      error => {
        console.log('server id down', error);
      }     
  )    

  })}
  

  deleteHandel(id:string) {
    this.FavoriteService.removefavoriteItem(id).subscribe(
      data => {
       console.log(data)
       this.ngOnInit()
        
      },
      error => {
        console.log('server id down', error);
      })
    }

}

