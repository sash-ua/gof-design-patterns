import { TestBed, inject } from '@angular/core/testing';

import { CachingInterseptorService } from './caching-interseptor.service';

describe('CachingInterseptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachingInterseptorService]
    });
  });

  it('should be created', inject([CachingInterseptorService], (service: CachingInterseptorService) => {
    expect(service).toBeTruthy();
  }));
});
