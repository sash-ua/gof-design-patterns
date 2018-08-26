import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {StrategyService} from '../services/strategy.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.strategy.gitApiLink,
    wikiLink: LINKS.behavioral.strategy.wikiLink,
    sampleLink: LINKS.behavioral.strategy.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private  strategy: StrategyService, private http: GetGitContentService) {
    this.strategy.strategy();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
