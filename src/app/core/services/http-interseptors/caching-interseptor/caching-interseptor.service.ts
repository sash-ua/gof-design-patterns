import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CachingService} from '../../caching/caching.service';
import {GitContentResponse} from '../../http/get-git-content.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachingInterseptorService implements HttpInterceptor {

  constructor(private cache: CachingService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<GitContentResponse>> {
    const cached = this.cache.get(req.url);
    return cached ? of(new HttpResponse(cached)) : this.request(req, next);
  }

  private request(req: HttpRequest<GitContentResponse>, next: HttpHandler): Observable<HttpEvent<GitContentResponse>> {
    return next.handle(req).pipe(
      tap(
        (ev: HttpResponse<GitContentResponse>) => {
          if (ev) {
            this.cache.set(req.url, ev);
          }
        }
      )
    );
  }
}
