import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpErrorHandlerService} from '../http-error-handler/http-error-handler.service';

export interface GitContentResponse {
  content: string;
  download_url: string;
  encoding: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
  _links: GitContentLinks;
}

interface GitContentLinks {
  git: string;
  html: string;
  self: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetGitContentService {
  private serviceName = 'GetGitContentService';

  constructor(
    private http: HttpClient,
    private hE: HttpErrorHandlerService,
  ) {
  }

  public getData(url: string): Observable<GitContentResponse | boolean> {
    return this.http.get<GitContentResponse | boolean>(url)
      .pipe(
        retry(3),
        catchError(this.hE.handleError(this.serviceName))
      );
  }
}
