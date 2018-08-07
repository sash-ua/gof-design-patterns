import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {AdapterService} from '../services/adapter.service';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.adapter;
  public sampleLink: string = SAMPLE_LINKS.structural.adapter;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private  adapter: AdapterService) {
    // console.log(this.adapter.adpterObjLvl());    // {body: 'speedUp'}
    // console.log(this.adapter.adapterClassLvl()); // {body: 'speedUp'}
  }

  ngOnInit() {
  }

}
