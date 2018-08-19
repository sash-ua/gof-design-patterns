import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {StrategyService} from '../services/strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.strategy;
  public sampleLink: string = SAMPLE_LINKS.behavioral.strategy;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private  strategy: StrategyService) {
    this.strategy.strategy();
  }
}
