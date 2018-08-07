import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {BuilderService} from '../services/builder.service';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {ELEMENTS} from '../../../../elements';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent {
  public wikiLink: string = WIKI_LINKS.creational.builder;
  public sampleLink: string = SAMPLE_LINKS.creational.builder;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private builder: BuilderService) {
    this.builder.buildHouse();
  }
}
