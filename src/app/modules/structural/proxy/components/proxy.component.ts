import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {ProxyService} from '../services/proxy.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.proxy;
  public sampleLink: string = SAMPLE_LINKS.structural.proxy;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private proxy: ProxyService) {
    this.proxy.proxy();
  }

  ngOnInit() {
  }

}
