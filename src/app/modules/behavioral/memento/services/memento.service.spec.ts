import { TestBed, inject } from '@angular/core/testing';

import { MementoService } from './memento.service';

describe('MementoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MementoService]
    });
  });

  it('should be created', inject([MementoService], (service: MementoService) => {
    expect(service).toBeTruthy();
  }));
});
