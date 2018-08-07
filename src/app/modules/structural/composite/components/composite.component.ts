import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {CompositeService} from '../services/composite.service';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.composite;
  public sampleLink: string = SAMPLE_LINKS.structural.composite;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private comp: CompositeService) {
    this.comp.composite();
  }

  ngOnInit() {
  }

}
