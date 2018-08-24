import {Component} from '@angular/core';
import {FactoryMethodService} from '../services/factory-method.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent {
  private gitLink = LINKS.creational.factoryMethod.gitApiLink;
  public wikiLink: string = LINKS.creational.factoryMethod.wikiLink;
  public sampleLink: string = LINKS.creational.factoryMethod.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private factoryMethod: FactoryMethodService, private http: GetGitContentService) {
    this.factoryMethod.factoryMethod();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
