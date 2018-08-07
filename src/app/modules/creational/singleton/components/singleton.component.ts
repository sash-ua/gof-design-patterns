import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {SingletonService} from '../services/singleton.service';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  public wikiLink: string = WIKI_LINKS.creational.singleton;
  public sampleLink: string = SAMPLE_LINKS.creational.singleton;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private singleton: SingletonService) {
    this.singleton.showSingleton();
  }
}
