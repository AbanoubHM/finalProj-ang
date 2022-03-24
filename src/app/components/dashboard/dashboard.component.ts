import { Component, OnInit } from '@angular/core';
import { GategoryService } from 'src/app/Service/gategory.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private gategory : GategoryService) { }
  showFiller = false;
  public gat : any = [];

  ngOnInit(): void {
    this.gategory.getAllPosts().subscribe(res=>{
      this.gat = res;
    })

  }

}
