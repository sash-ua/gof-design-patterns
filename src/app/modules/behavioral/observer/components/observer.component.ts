import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {ObserverService} from '../services/observer.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.observer.gitApiLink,
    wikiLink: Links.behavioral.observer.wikiLink,
    sampleLink: Links.behavioral.observer.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private obs: ObserverService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.obs.pullObserver();
    this.obs.pushObserver();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
