import {AfterViewInit, Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {BridgeService} from '../services/bridge.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements AfterViewInit {
  private gitLink = LINKS.structural.bridge.gitApiLink;
  public wikiLink: string = LINKS.structural.bridge.wikiLink;
  public sampleLink: string = LINKS.structural.bridge.sampleLink;
  public linkName = ELEMENTS.linkToSampleName;
  public sample = ELEMENTS.sampleTitle;
  public content$: Observable<any>;

  constructor(private bridge: BridgeService, private http: GetGitContentService) {
    bridge.bridge();
  }

  ngAfterViewInit() {
    this.content$ = this.http.getData(this.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
  }
}
