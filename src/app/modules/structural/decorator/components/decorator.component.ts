import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {DecoratorService} from '../services/decorator.service';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.decorator;
  public sampleLink: string = SAMPLE_LINKS.structural.decorator;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private decorator: DecoratorService) {
    this.decorator.decorator();
  }

  ngOnInit() {
  }
}
