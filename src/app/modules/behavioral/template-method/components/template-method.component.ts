import { Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {TemplateMethodService} from '../services/template-method.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.css']
})
export class TemplateMethodComponent  {
  private gitLink = LINKS.behavioral.templateMethod.gitApiLink;
  public wikiLink: string = LINKS.behavioral.templateMethod.wikiLink;
  public sampleLink: string = LINKS.behavioral.templateMethod.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private  tm: TemplateMethodService, private http: GetGitContentService) {
    this.tm.templateMethod();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
