import { Profile } from './../../Models/Profile';
import { Component, OnInit } from '@angular/core';
import { AuthService, AuthState } from '@auth0/auth0-angular';
import { BecomeVenderService } from 'src/app/Service/become-vender.service';
import { PublishstoreService } from 'src/app/Service/publishstore.service';
import { StoreService } from 'src/app/Service/store.service';
import { IProduct } from '../Models/iproduct';
@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.scss']
})
export class MystoreComponent implements OnInit {
  public VendorProducts : any = [];
  ff: any;
  status: string="";

  constructor(private publshstor : PublishstoreService ,private storepublish : StoreService ,public auth:AuthService,private vand:BecomeVenderService) { }


  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.ff=profile?.sub
      this.getVendor();
      console.log(profile?.sub)})
  }
 

  removeItem(item:any){
    console.log(item);
    this.vand.DeleteProduct(item).subscribe(() => {
    this.getVendor()
    this.status = 'Delete successful'});
  }
 
  getVendor(){
    this.vand.GetVandorProducts(this.ff).subscribe(data=>
      this.VendorProducts=data);
    
  }

}
