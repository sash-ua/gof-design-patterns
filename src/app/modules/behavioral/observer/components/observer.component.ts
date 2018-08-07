import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.observer;
  public sampleLink: string = SAMPLE_LINKS.behavioral.observer;
  public linkName = ELEMENTS.linkToSampleName;

  constructor() {
  }
}
