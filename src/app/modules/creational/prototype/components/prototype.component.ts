import {Component} from '@angular/core';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {PrototypeService} from '../services/prototype.service';
import {Observable} from 'rxjs';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent {
  private gitLink = LINKS.creational.prototype.gitApiLink;
  public wikiLink: string = LINKS.creational.prototype.wikiLink;
  public sampleLink: string = LINKS.creational.prototype.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private protoServ: PrototypeService, private http: GetGitContentService) {
    this.protoServ.prototype();
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
