import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {AdapterService} from '../services/adapter.service';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.adapter.gitApiLink,
    wikiLink: LINKS.structural.adapter.wikiLink,
    sampleLink: LINKS.structural.adapter.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private  adapter: AdapterService, private http: GetGitContentService) {
    this.adapter.adapter();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
