import { TestBed } from '@angular/core/testing';

import { GategoryService } from './gategory.service';

describe('GategoryService', () => {
  let service: GategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
