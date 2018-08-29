import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {InterpreterService} from '../services/interpreter.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-interpreter',
  templateUrl: './interpreter.component.html',
  styleUrls: ['./interpreter.component.css']
})
export class InterpreterComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.interpreter.gitApiLink,
    wikiLink: LINKS.behavioral.interpreter.wikiLink,
    sampleLink: LINKS.behavioral.interpreter.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private interpreter: InterpreterService, private http: GetGitContentService) {
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
