import { Component, OnInit } from '@angular/core';
import { PublishProduct } from 'src/app/Models/Ipublish';
import { GategoryService } from 'src/app/Service/gategory.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  post: any;
  address: string = '';
  username: string = '';
  constructor(/*private gategory : GategoryService*/) { }

   gat : PublishProduct[] = [];

  ngOnInit(): void {

    // this.gategory.getAllGatogaries()
    // .subscribe(res=>{
    //   this.gat = res;
    // })

  }

}
