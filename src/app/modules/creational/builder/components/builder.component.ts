import {Component} from '@angular/core';
import {BuilderService} from '../services/builder.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.builder.gitApiLink,
    wikiLink: LINKS.creational.builder.wikiLink,
    sampleLink: LINKS.creational.builder.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private builder: BuilderService, private http: GetGitContentService) {
    this.builder.buildHouse();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
