import { TestBed, inject } from '@angular/core/testing';

import { DecoratorService } from './decorator.service';

describe('DecoratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecoratorService]
    });
  });

  it('should be created', inject([DecoratorService], (service: DecoratorService) => {
    expect(service).toBeTruthy();
  }));
});
