import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
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
    gitLink: LINKS.structural.bridge.gitApiLink,
    wikiLink: LINKS.structural.bridge.wikiLink,
    sampleLink: LINKS.structural.bridge.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private bridge: BridgeService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.bridge.bridge();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
