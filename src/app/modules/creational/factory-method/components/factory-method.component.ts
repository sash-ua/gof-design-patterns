import {Component} from '@angular/core';
import {FactoryMethodService} from '../services/factory-method.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.factoryMethod.gitApiLink,
    wikiLink: LINKS.creational.factoryMethod.wikiLink,
    sampleLink: LINKS.creational.factoryMethod.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private factoryMethod: FactoryMethodService, private http: GetGitContentService) {
    this.factoryMethod.factoryMethod();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
