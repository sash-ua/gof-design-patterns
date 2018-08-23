import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {AdapterService} from '../services/adapter.service';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent implements AfterViewInit {
  private gitLink = LINKS.structural.adapter.gitApiLink;
  public wikiLink: string = LINKS.structural.adapter.wikiLink;
  public sampleLink: string = LINKS.structural.adapter.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private  adapter: AdapterService, private http: GetGitContentService) {
    this.adapter.adpterObjLvl();
    this.adapter.adapterClassLvl();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
