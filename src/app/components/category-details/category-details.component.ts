import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GategoryService } from 'src/app/Service/gategory.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private CategoryService:GategoryService) { }
cateID:any;
categories:any;
  ngOnInit(): void {
   this.cateID= this.activatedRoute.snapshot.paramMap.get('id');
   this.categories= this.CategoryService.getCategoryProducts(this.cateID);
  }

}
