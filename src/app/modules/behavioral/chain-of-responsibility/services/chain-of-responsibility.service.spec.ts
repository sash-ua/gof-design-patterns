import { TestBed, inject } from '@angular/core/testing';

import { ChainOfResponsibilityService } from './chain-of-responsibility.service';

describe('ChainOfResponsibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChainOfResponsibilityService]
    });
  });

  it('should be created', inject([ChainOfResponsibilityService], (service: ChainOfResponsibilityService) => {
    expect(service).toBeTruthy();
  }));
});
