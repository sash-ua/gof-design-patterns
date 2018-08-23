import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {MementoService} from '../services/memento.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent implements AfterViewInit {
  private gitLink = LINKS.behavioral.memento.gitApiLink;
  public wikiLink: string = LINKS.behavioral.memento.wikiLink;
  public sampleLink: string = LINKS.behavioral.memento.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private memento: MementoService, private http: GetGitContentService) {
    this.memento.memento();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
