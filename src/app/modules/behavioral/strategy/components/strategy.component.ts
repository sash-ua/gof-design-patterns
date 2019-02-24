import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {StrategyService} from '../services/strategy.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.strategy.gitApiLink,
    wikiLink: LINKS.behavioral.strategy.wikiLink,
    sampleLink: LINKS.behavioral.strategy.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private  strategy: StrategyService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.strategy.strategy();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
