import {Component} from '@angular/core';
import {AbstractFactoryService} from '../services/abstract-factory.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent {
  private gitLink = LINKS.creational.abstractFactory.gitApiLink;
  public wikiLink: string = LINKS.creational.abstractFactory.wikiLink;
  public sampleLink: string = LINKS.creational.abstractFactory.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(public car: AbstractFactoryService, private http: GetGitContentService) {
    this.car.abstractFactory();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
