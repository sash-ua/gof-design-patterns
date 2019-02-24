import {Injectable} from '@angular/core';
import {GetGitContentService} from '../http/get-git-content.service';
import {InterpreterService} from '../../../modules/behavioral/interpreter/services/interpreter.service';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../modules/shared/components/pattern/pattern.component';

@Injectable({
  providedIn: 'root'
})
export class DataInjectorService {

  constructor(private http: GetGitContentService, private interpreter: InterpreterService) {
  }

  public getContent(obj: PatternConfig): PatternConfig {
    const content$ = this.http.getData(obj.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    return Object.assign(obj, {content$});
  }
}
