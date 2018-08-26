import {Component} from '@angular/core';
import {AbstractFactoryService} from '../services/abstract-factory.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.abstractFactory.gitApiLink,
    wikiLink: LINKS.creational.abstractFactory.wikiLink,
    sampleLink: LINKS.creational.abstractFactory.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(public car: AbstractFactoryService, private http: GetGitContentService) {
    this.car.abstractFactory();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
