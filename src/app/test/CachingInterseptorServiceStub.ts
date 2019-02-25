import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GitContentResponse} from '../core/services/http/get-git-content.service';

export class CachingInterseptorServiceStub implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<GitContentResponse>> {
    return next.handle(req);
  }
}
