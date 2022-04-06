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
  styleUrls: ['./dashbord-nav.component.scss'],
})
export class DashbordNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    private cartService: CartService,
    private FavoriteService: FavoriteService,
    private User: UserService,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  // nav.component.ts
  menuItemsClients = ['MyProfile'];
  menuItems = [''];
  roles: string = '';
  userId: any = '';
  menuItemsVendor = ['MyProfile', 'AddProduct', 'customers', 'MyStore'];
  islogged = false;
  cartbagdge = true;
  favbagdge = true;
  product: any = [];
  cartitems: any =[];
  cartcount: any;
  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.userId = profile?.sub;
      console.log(profile?.['http://roletest.net/roles']);
      this.roles = profile?.['http://roletest.net/roles'];

      if (this.roles.length == 2) {
        this.menuItems = ['MyProfile', 'AddProduct', 'customers', 'MyStore'];
      } else {
        this.menuItems = ['MyProfile'];
      }

      this.cartService.getCartProducts(this.userId).subscribe((data) => {
        this.cartitems = data;
        this.cartcount = this.cartitems.length;
        if (this.cartcount != 0) {
          this.cartbagdge = false;
        } else {
          this.cartbagdge = true;
        }
      });
    });
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
