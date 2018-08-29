import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {ChainOfResponsibilityService} from '../services/chain-of-responsibility.service';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {InterpreterService} from '../../interpreter/services/interpreter.service';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.css']
})
export class ChainOfResponsibilityComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.chainOfResponsibility.gitApiLink,
    wikiLink: LINKS.behavioral.chainOfResponsibility.wikiLink,
    sampleLink: LINKS.behavioral.chainOfResponsibility.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private cOfR: ChainOfResponsibilityService, private http: GetGitContentService, private interpreter: InterpreterService) {
    this.cOfR.chainOfResponsibility();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
