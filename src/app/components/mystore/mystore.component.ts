import { Component, OnInit } from '@angular/core';
import { PublishstoreService } from 'src/app/Service/publishstore.service';
import { StoreService } from 'src/app/Service/store.service';
@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.scss']
})
export class MystoreComponent implements OnInit {
  public stores : any = [];

  constructor(private publshstor : PublishstoreService ,private storepublish : StoreService) { }


  ngOnInit(): void {
    this.publshstor.getstores()
    .subscribe(res=>{
      this.stores = res;
    })



  }

  removeItem(item: any){
    this.publshstor.removestoreitem(item);
  }
  emptystore(){
    this.publshstor.removeAllstores();
  }


}
