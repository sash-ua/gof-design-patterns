import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {MementoService} from '../services/memento.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {InterpreterService} from '../../interpreter/services/interpreter.service';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.memento.gitApiLink,
    wikiLink: LINKS.behavioral.memento.wikiLink,
    sampleLink: LINKS.behavioral.memento.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private memento: MementoService, private http: GetGitContentService, private interpreter: InterpreterService) {
    this.memento.memento();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
