import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {SingletonService} from '../services/singleton.service';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements AfterViewInit {
  private gitLink = LINKS.creational.abstractFactory.gitApiLink;
  public wikiLink: string = LINKS.creational.singleton.wikiLink;
  public sampleLink: string = LINKS.creational.singleton.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private singleton: SingletonService, private http: GetGitContentService) {
    this.singleton.singleton();
  }
  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
