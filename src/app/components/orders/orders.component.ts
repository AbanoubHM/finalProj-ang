import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PublishProduct } from 'src/app/Models/Ipublish';
import { PublishstoreService } from 'src/app/Service/publishstore.service';
import { StoreService } from 'src/app/Service/store.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private fb:FormBuilder , private publishstore:PublishstoreService ,private snakeBar: MatSnackBar , private store : StoreService ) { }
  postList?: PublishProduct[]
  numberofposts: number = 0;
  errMsg:string=''
  ordersForm: FormGroup = this.fb.group({
    Name:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(25)]],
    Description:['',[Validators.required]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]],
    SaleValue: [''],
    Quantity: ['', Validators.required],
    PreparationDays: ['', Validators.required],
    Category:['',Validators.required]
    // confirm_password:['',Validators.required],
    // password:['',[Validators.required,Validators.minLength(6)]],
    // birthdate:['',Validators.required],
    // address:['']
  })
  ngOnInit(): void {
    this.store.getAllVendorStore().subscribe(postData=>{
      this.postList=postData
      console.log(this.postList)
      this.postList.forEach(element => {
        this.numberofposts++;
      });
    },
    error=>{
      this.errMsg=error
    })
  }

  get ff(){
    return this.ordersForm.controls;
  }


  uploadfile(event : any) {
    console.log(event.target.files[0])
    this.ff['image']=event.target.files[0]


  }


  submitForm(item: any){
    console.log(this.ordersForm);
    this.publishstore.addtostore(item)
    this.snakeBar.open("Added","", {duration:1000, panelClass:["bg-success","text-center"]})

  }
  register_validation_messages = {
    'Name': [
      { type: 'required', message: 'your ptoduct Name is required' }
    ],
    'Description': [
      { type: 'required', message: 'Description of your product is required' }
    ],

    'image': [
      { type: 'required', message: 'your image must be in (jpeg | png | jpg)' }],
    'price': [
      { type: 'required', message: 'add your product price' }
    ],
    'Quantity' :[
      { type: 'required', message: 'you must tell us  how many Quantity do you have for your product' }
    ],
    'PreparationDays': [
      { type: 'required', message: 'you must tell us  how many days prepair your product for the client' }
    ],
    'Category': [
      { type: 'required', message: 'you must choice Category to publish your product there ' }
    ]



  }


}

