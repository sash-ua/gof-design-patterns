import { TestBed, inject } from '@angular/core/testing';

import { CarAbstractFactoryService } from './object-creator.service';

describe('ObjectCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarAbstractFactoryService]
    });
  });

  it('should be created', inject([CarAbstractFactoryService], (service: CarAbstractFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
