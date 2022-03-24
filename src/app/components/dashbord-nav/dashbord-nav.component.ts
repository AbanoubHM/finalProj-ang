import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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

  constructor(private breakpointObserver: BreakpointObserver) {}
// nav.component.ts

menuItems = ['dash', 'sales', 'orders', 'customers', 'products'];

}
