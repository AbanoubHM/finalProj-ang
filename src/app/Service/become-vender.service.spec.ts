import { TestBed } from '@angular/core/testing';

import { BecomeVenderService } from './become-vender.service';

describe('BecomeVenderService', () => {
  let service: BecomeVenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BecomeVenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
