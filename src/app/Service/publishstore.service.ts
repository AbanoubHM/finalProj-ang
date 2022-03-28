import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublishstoreService {
  public storeitemlist : any =[]
  public storeList = new BehaviorSubject<any>([])
  constructor() { }
  getstores(){
    return this.storeList.asObservable();
  }
  setProduct(store : any){
    this.storeitemlist.push(...store);
    this.storeList.next(store);
  }
  addtostore(store : any){
    this.storeitemlist.push(store);
    this.storeList.next(this.storeitemlist);
    
  }


removestoreitem(store: any){
    this.storeitemlist.map((a:any, index:any)=>{
      if(store.id=== a.id){
        this.storeitemlist.splice(index,1);
      }
    })
    this.storeList.next(this.storeitemlist);
  }
  removeAllstores(){
    this.storeitemlist = []
    this.storeList.next(this.storeitemlist);
  }
}
