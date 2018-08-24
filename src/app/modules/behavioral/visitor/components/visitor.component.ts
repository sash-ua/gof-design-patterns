import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {VisitorService} from '../services/visitor.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  private gitLink = LINKS.behavioral.visitor.gitApiLink;
  public wikiLink: string = LINKS.behavioral.visitor.wikiLink;
  public sampleLink: string = LINKS.behavioral.visitor.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private visitor: VisitorService, private http: GetGitContentService) {
    this.visitor.visitior();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
