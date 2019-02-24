import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {AdapterService} from '../services/adapter.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.adapter.gitApiLink,
    wikiLink: LINKS.structural.adapter.wikiLink,
    sampleLink: LINKS.structural.adapter.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private  adapter: AdapterService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.adapter.adapter();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
