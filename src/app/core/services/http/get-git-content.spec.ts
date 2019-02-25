import {TestBed} from '@angular/core/testing';

import {GetGitContentService} from './get-git-content.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CachingInterseptorServiceStub} from '../../../test/CachingInterseptorServiceStub';

describe('GetGitContentService', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let service: GetGitContentService;
  const testUrl = '/test';
  const resp = {data: 'test responce'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: CachingInterseptorServiceStub, multi: true}
      ]
    });
    service = TestBed.get(GetGitContentService);
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be GET request method', (() => {
    const request = service.getData(testUrl).subscribe();
    const httpRequest = httpMock.expectOne(testUrl);
    expect(httpRequest.request.method).toEqual('GET');
    httpRequest.flush(resp);
    request.unsubscribe();
  }));
  it('should return response', () => {
    const req = service.getData(testUrl).subscribe(r => {
      expect(r).toEqual(resp);
    });
    const httpRequest = httpMock.expectOne(testUrl);
    httpRequest.flush(resp);
    req.unsubscribe();
  });
});
