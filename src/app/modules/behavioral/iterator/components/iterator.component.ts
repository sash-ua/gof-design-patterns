import { Component } from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {IteratorService} from '../services/iterator.service';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.iterator;
  public sampleLink: string = SAMPLE_LINKS.behavioral.iterator;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private iterator: IteratorService) {
    this.iterator.iterator();
  }
}
