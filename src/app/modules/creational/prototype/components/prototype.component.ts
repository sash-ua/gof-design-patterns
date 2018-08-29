import {Component} from '@angular/core';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {PrototypeService} from '../services/prototype.service';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {InterpreterService} from '../../../behavioral/interpreter/services/interpreter.service';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.prototype.gitApiLink,
    wikiLink: LINKS.creational.prototype.wikiLink,
    sampleLink: LINKS.creational.prototype.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private protoServ: PrototypeService, private http: GetGitContentService, private interpreter: InterpreterService) {
    this.protoServ.prototype();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? this.interpreter.interpreter(atob(resp.content)) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
