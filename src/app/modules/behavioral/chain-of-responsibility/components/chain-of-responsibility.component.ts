import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {ChainOfResponsibilityService} from '../services/chain-of-responsibility.service';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.css']
})
export class ChainOfResponsibilityComponent implements AfterViewInit {
  private gitLink = LINKS.behavioral.chainOfResponsibility.gitApiLink;
  public wikiLink: string = LINKS.behavioral.chainOfResponsibility.wikiLink;
  public sampleLink: string = LINKS.behavioral.chainOfResponsibility.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private cOfR: ChainOfResponsibilityService, private http: GetGitContentService) {
    this.cOfR.chainOfResponsibility();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
