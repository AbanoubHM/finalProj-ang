import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { CartService } from 'src/app/Service/cart.service';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashbord-nav',
  templateUrl: './dashbord-nav.component.html',
  styleUrls: ['./dashbord-nav.component.scss']
})
export class DashbordNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService,
    private cartService: CartService, private FavoriteService: FavoriteService, private User: UserService,
    @Inject(DOCUMENT) private doc: Document) { }
  // nav.component.ts
  menuItemsClients = ['MyProfile']
  menuItems = [""];
  roles: string = "";

  menuItemsVendor = ['MyProfile', 'AddProduct', 'customers', 'MyStore'];
  public totalItem: number = 0;
  public totalfavortit: number = 0;
  islogged = false;
  hidden = true;
  hidden1 = true;
  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {

      console.log(profile?.['http://roletest.net/roles'])
      this.roles = profile?.['http://roletest.net/roles'];
      if (this.roles.length == 2) {
        this.menuItems = ['MyProfile', 'AddProduct', 'customers', 'MyStore'];
      }
      else {
        this.menuItems = ['MyProfile'];
      }
      // this.cartService.getCartProducts().
      //   subscribe(res => {
      //     this.totalItem = res.length;
      //     if (this.totalItem > 0) { this.hidden = false } else { this.hidden = true }
      //   });
      // //   this.FavoriteService.getProducts().
      //   subscribe(res => {
      //     this.totalfavortit = res.length;
      //     if (this.totalfavortit > 0) { this.hidden1 = false } else { this.hidden1 = true }
    });
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
