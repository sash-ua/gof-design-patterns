import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {FacadeService} from '../services/facade.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent {
  private gitLink = LINKS.structural.facade.gitApiLink;
  public wikiLink: string = LINKS.structural.facade.wikiLink;
  public sampleLink: string = LINKS.structural.facade.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private  f: FacadeService, private http: GetGitContentService) {
    f.facade();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
