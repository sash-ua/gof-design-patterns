import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {MediatorService} from '../services/mediator.service';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.mediator;
  public sampleLink: string = SAMPLE_LINKS.behavioral.mediator;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private mediator: MediatorService) {
    this.mediator.mediator();
  }
}
