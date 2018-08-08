import { Component } from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {ChainOfResponsibilityService} from '../services/chain-of-responsibility.service';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.css']
})
export class ChainOfResponsibilityComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.chainOfResponsibility;
  public sampleLink: string = SAMPLE_LINKS.behavioral.chainOfResponsibility;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private cOfR: ChainOfResponsibilityService) {
    this.cOfR.chainOfResponsibility();
  }
}
