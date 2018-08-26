import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {SingletonService} from '../services/singleton.service';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.singleton.gitApiLink,
    wikiLink: LINKS.creational.singleton.wikiLink,
    sampleLink: LINKS.creational.singleton.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private singleton: SingletonService, private http: GetGitContentService) {
    this.singleton.singleton();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
