import { TestBed } from '@angular/core/testing';

import { PublishstoreService } from './publishstore.service';

describe('PublishstoreService', () => {
  let service: PublishstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
