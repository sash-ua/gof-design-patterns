import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {IteratorService} from '../services/iterator.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent implements AfterViewInit {
  private gitLink = LINKS.behavioral.iterator.gitApiLink;
  public wikiLink: string = LINKS.behavioral.iterator.wikiLink;
  public sampleLink: string = LINKS.behavioral.iterator.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private iterator: IteratorService, private http: GetGitContentService) {
    this.iterator.iterator();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
