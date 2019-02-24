import { TestBed } from '@angular/core/testing';

import { DataInjectorService } from './data-injector.service';

describe('DataInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataInjectorService = TestBed.get(DataInjectorService);
    expect(service).toBeTruthy();
  });
});
