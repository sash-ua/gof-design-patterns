import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {CalculatorService} from '../services/calculator.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  private gitLink = LINKS.behavioral.command.gitApiLink;
  public wikiLink: string = LINKS.behavioral.command.wikiLink;
  public sampleLink: string = LINKS.behavioral.command.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private calc: CalculatorService, private http: GetGitContentService) {
    this.calc.calculator();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        console.log('resp', resp);
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
