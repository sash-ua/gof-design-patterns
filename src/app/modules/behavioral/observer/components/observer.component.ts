import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {ObserverService} from '../services/observer.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.observer.gitApiLink,
    wikiLink: LINKS.behavioral.observer.wikiLink,
    sampleLink: LINKS.behavioral.observer.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private obs: ObserverService, private http: GetGitContentService) {
    this.obs.pullObserver();
    this.obs.pushObserver();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
