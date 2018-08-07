import { TestBed, inject } from '@angular/core/testing';

import { FactoryMethodService } from './factory-method.service';

describe('FactoryMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactoryMethodService]
    });
  });

  it('should be created', inject([FactoryMethodService], (service: FactoryMethodService) => {
    expect(service).toBeTruthy();
  }));
});
