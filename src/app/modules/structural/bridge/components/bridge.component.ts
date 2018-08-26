import {Component} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {BridgeService} from '../services/bridge.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.bridge.gitApiLink,
    wikiLink: LINKS.structural.bridge.wikiLink,
    sampleLink: LINKS.structural.bridge.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private bridge: BridgeService, private http: GetGitContentService) {
    bridge.bridge();
    const content$: Observable<string> = this.http.getData(this.patternCompData.gitLink).pipe(
      map((resp: any) => {
        return resp ? atob(resp.content) : null;
      })
    );
    this.patternCompData = Object.assign(this.patternCompData, {content$});
  }
}
