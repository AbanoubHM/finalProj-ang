import { Component, OnInit , Input } from '@angular/core';
import { GategoryService } from 'src/app/Service/gategory.service';
import { PublishProduct } from 'src/app/Models/Ipublish';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PublishstoreService } from 'src/app/Service/publishstore.service';
import { StoreService } from 'src/app/Service/store.service';
import { IStore } from '../Models/Istore';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  editAddressForm?: FormGroup;
  postList?: PublishProduct[];
  public storelist: any;
  errMsg: string = '';
  numberOfstores: number = 0;
  listToggle:boolean=true;
  constructor(private formBuilder: FormBuilder ,private activatedRoute:ActivatedRoute,private storeserv:StoreService,private router:Router ,private publishstore: PublishstoreService ,private snakeBar: MatSnackBar) {}
  ngOnInit(): void {
    this.storeserv.getAllVendorStore().subscribe(postData=>{
      this.postList=postData
      console.log(this.postList)
      this.postList.forEach(element => {
        this.numberOfstores++;
      });
    },
    error=>{
      this.errMsg=error
    })

  }

  getstoreDetails(id:number){
    this.router.navigate([id],{relativeTo:this.activatedRoute})

  }


  addtostore(item: any){
    this.publishstore.addtostore(item)
  this.snakeBar.open("Added to your store","", {duration:1000, panelClass:["bg-success","text-center"]})
    }


    toggleList(){
      this.listToggle=false
    }
    toggleGrid(){
      this.listToggle=true
    }







}

