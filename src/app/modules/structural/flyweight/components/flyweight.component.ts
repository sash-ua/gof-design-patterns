import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {FlyweightService} from '../services/flyweight.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-flyweight',
  templateUrl: './flyweight.component.html',
  styleUrls: ['./flyweight.component.css']
})
export class FlyweightComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.flyweight.gitApiLink,
    wikiLink: LINKS.structural.flyweight.wikiLink,
    sampleLink: LINKS.structural.flyweight.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private fl: FlyweightService, private http: GetGitContentService) {
    fl.flyweight();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
