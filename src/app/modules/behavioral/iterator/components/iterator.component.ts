import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {IteratorService} from '../services/iterator.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.iterator.gitApiLink,
    wikiLink: LINKS.behavioral.iterator.wikiLink,
    sampleLink: LINKS.behavioral.iterator.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private iterator: IteratorService, private http: GetGitContentService) {
    this.iterator.iterator();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
