import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFavouriteComponent } from './item-favourite.component';

describe('ItemFavouriteComponent', () => {
  let component: ItemFavouriteComponent;
  let fixture: ComponentFixture<ItemFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
