import { TestBed } from '@angular/core/testing';

import { PostOrdersService } from './post-orders.service';

describe('PostOrdersService', () => {
  let service: PostOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
