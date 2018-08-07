import { TestBed, inject } from '@angular/core/testing';

import { FlyweightService } from './flyweight.service';

describe('FlyweightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyweightService]
    });
  });

  it('should be created', inject([FlyweightService], (service: FlyweightService) => {
    expect(service).toBeTruthy();
  }));
});
