import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {FlyweightService} from '../services/flyweight.service';

@Component({
  selector: 'app-flyweight',
  templateUrl: './flyweight.component.html',
  styleUrls: ['./flyweight.component.css']
})
export class FlyweightComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.flyweight;
  public sampleLink: string = SAMPLE_LINKS.structural.flyweight;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private fl: FlyweightService) {
    fl.flyweight();
  }

  ngOnInit() {
  }

}
