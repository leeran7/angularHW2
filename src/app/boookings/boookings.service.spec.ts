import { TestBed } from '@angular/core/testing';

import { BoookingsService } from './boookings.service';

describe('BoookingsService', () => {
  let service: BoookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
