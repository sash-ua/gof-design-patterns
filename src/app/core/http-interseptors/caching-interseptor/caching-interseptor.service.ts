import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {CachingService} from '../../services/caching/caching.service';
import {GitContentResponse} from '../../services/http/get-git-content.service';
import {startWith, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachingInterseptorService implements HttpInterceptor {

  constructor(private cache: CachingService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<GitContentResponse>>  {
    const cached = this.cache.get(req.url);
    // console.log('cached', cached);
    // TODO `of(cached)` does not work?
    return  this.request(req, next);
    // return cached ? of(cached) : this.request(req, next);
  }

  private request(req: HttpRequest<GitContentResponse>, next: HttpHandler): Observable<HttpEvent<GitContentResponse>> {
    return next.handle(req).pipe(
      tap(
        (ev: HttpResponse<any>) => {
          // console.log('ev', ev);
          if (ev) {
            this.cache.set(req.url, ev);
          }
        }
      )
    );
  }
}
