import {Component} from '@angular/core';
import {BuilderService} from '../services/builder.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  private gitLink = LINKS.creational.builder.gitApiLink;
  public wikiLink: string = LINKS.creational.builder.wikiLink;
  public sampleLink: string = LINKS.creational.builder.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private builder: BuilderService, private http: GetGitContentService) {
    this.builder.buildHouse();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
