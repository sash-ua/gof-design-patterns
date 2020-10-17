import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {BridgeService} from '../services/bridge.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.structural.bridge.gitApiLink,
    wikiLink: Links.structural.bridge.wikiLink,
    sampleLink: Links.structural.bridge.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private bridge: BridgeService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.bridge.bridge();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
