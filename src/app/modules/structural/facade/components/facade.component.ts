import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {FacadeService} from '../services/facade.service';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.facade;
  public sampleLink: string = SAMPLE_LINKS.structural.facade;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private  f: FacadeService) {
    f.facade();
  }

  ngOnInit() {
  }

}
