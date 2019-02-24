import { TestBed, inject } from '@angular/core/testing';
import {AbstractFactoryService} from './abstract-factory.service';

describe('ObjectCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractFactoryService]
    });
  });

  it('should be created', inject([AbstractFactoryService], (service: AbstractFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
