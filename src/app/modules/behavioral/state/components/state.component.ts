import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {StateService} from '../services/state.service';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements AfterViewInit {
  private gitLink = LINKS.behavioral.state.gitApiLink;
  public wikiLink: string = LINKS.behavioral.state.wikiLink;
  public sampleLink: string = LINKS.behavioral.state.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private  state: StateService, private http: GetGitContentService) {
    this.state.state();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
