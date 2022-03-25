import { Component, OnInit , Input } from '@angular/core';
import { GategoryService } from 'src/app/Service/gategory.service';
import { PublishProduct } from 'src/app/Models/Ipublish';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  editAddressForm?: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      
    }
  ngOnInit(): void {

  }

}

