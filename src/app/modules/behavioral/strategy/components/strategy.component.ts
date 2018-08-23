import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {StrategyService} from '../services/strategy.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements AfterViewInit {
  private gitLink = LINKS.behavioral.strategy.gitApiLink;
  public wikiLink: string = LINKS.behavioral.strategy.wikiLink;
  public sampleLink: string = LINKS.behavioral.strategy.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private  strategy: StrategyService, private http: GetGitContentService) {
    this.strategy.strategy();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
