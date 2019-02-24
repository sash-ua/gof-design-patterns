import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {ProxyService} from '../services/proxy.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.proxy.gitApiLink,
    wikiLink: LINKS.structural.proxy.wikiLink,
    sampleLink: LINKS.structural.proxy.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private proxy: ProxyService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.proxy.proxy();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
