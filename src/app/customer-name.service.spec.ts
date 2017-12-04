import { TestBed, inject } from '@angular/core/testing';

import { CustomerNameService } from './customer-name.service';

describe('CustomerNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerNameService]
    });
  });

  it('should be created', inject([CustomerNameService], (service: CustomerNameService) => {
    expect(service).toBeTruthy();
  }));
});
