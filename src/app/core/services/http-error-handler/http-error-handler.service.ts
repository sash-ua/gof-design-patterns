import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {
  public handleError<T>(serviceName = ''): (e: HttpErrorResponse) => Observable<boolean> {
    return (e: HttpErrorResponse): Observable<boolean> => {
      const errorMsg = `Code: ${e.status}, \n Body: ${e.error} in ${serviceName}`;
      console.error(errorMsg);
      return of(false);
    };
  }
}
