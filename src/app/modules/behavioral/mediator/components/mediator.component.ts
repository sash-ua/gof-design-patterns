import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {MediatorService} from '../services/mediator.service';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent implements AfterViewInit {
  private gitLink = LINKS.behavioral.mediator.gitApiLink;
  public wikiLink: string = LINKS.behavioral.mediator.wikiLink;
  public sampleLink: string = LINKS.behavioral.mediator.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private mediator: MediatorService, private http: GetGitContentService) {
    this.mediator.mediator();
  }
  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }

}
