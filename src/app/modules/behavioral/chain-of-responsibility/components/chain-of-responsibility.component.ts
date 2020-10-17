import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {ChainOfResponsibilityService} from '../services/chain-of-responsibility.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.css']
})
export class ChainOfResponsibilityComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.chainOfResponsibility.gitApiLink,
    wikiLink: Links.behavioral.chainOfResponsibility.wikiLink,
    sampleLink: Links.behavioral.chainOfResponsibility.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private cOfR: ChainOfResponsibilityService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.cOfR.chainOfResponsibility();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
