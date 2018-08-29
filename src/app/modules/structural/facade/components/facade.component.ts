import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {FacadeService} from '../services/facade.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {InterpreterService} from '../../../behavioral/interpreter/services/interpreter.service';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.facade.gitApiLink,
    wikiLink: LINKS.structural.facade.wikiLink,
    sampleLink: LINKS.structural.facade.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private  f: FacadeService, private http: GetGitContentService, private interpreter: InterpreterService) {
    f.facade();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
