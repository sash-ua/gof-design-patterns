import { TestBed, inject } from '@angular/core/testing';

import { CompositeService } from './composite.service';

describe('CompositeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositeService]
    });
  });

  it('should be created', inject([CompositeService], (service: CompositeService) => {
    expect(service).toBeTruthy();
  }));
});
