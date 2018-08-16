import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {MementoService} from '../services/memento.service';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.memento;
  public sampleLink: string = SAMPLE_LINKS.behavioral.memento;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private memento: MementoService) {
    this.memento.memento();
  }
}
