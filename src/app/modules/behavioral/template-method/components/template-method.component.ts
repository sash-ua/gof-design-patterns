import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {TemplateMethodService} from '../services/template-method.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {InterpreterService} from '../../interpreter/services/interpreter.service';

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.css']
})
export class TemplateMethodComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.templateMethod.gitApiLink,
    wikiLink: LINKS.behavioral.templateMethod.wikiLink,
    sampleLink: LINKS.behavioral.templateMethod.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private  tm: TemplateMethodService, private http: GetGitContentService, private interpreter: InterpreterService) {
    this.tm.templateMethod();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
