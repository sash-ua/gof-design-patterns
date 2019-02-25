import {TestBed} from '@angular/core/testing';

import {DataInjectorService} from './data-injector.service';
import {GetGitContentService} from '../http/get-git-content.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DataInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GetGitContentService,
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: DataInjectorService = TestBed.get(DataInjectorService);
    expect(service).toBeTruthy();
  });
});
