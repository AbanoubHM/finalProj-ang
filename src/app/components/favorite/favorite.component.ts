import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../Service/favorite.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private FavoriteService : FavoriteService  ,
              public authService: AuthService, ) { }

 products: any = [];

userId :any ;              
 
ngOnInit(): void {
  
  this.authService.user$.subscribe((profile) => {
    
    this.FavoriteService.getfevProducts(profile?.sub).subscribe(
      data => {
        this.products = data ;
        console.log('get items', data);
      },
      
      error => {
        console.log('server id down', error);
      })    

  })

} 
    



}
