import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GitContentResponse} from '../core/services/http/get-git-content.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CachingInterceptorServiceMock implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<GitContentResponse>> {
    return next.handle(req);
  }
}
