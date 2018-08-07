import { TestBed, inject } from '@angular/core/testing';

import { IteratorService } from './iterator.service';

describe('IteratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IteratorService]
    });
  });

  it('should be created', inject([IteratorService], (service: IteratorService) => {
    expect(service).toBeTruthy();
  }));
});
