import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  Readmore = false;
  longText = `This is long paragraph text containseverall words continued. An example for implementingdynamicallyy limit long text`;
  ngOnInit(): void {
  }
  GoToLearnMore(){

  }
}
