import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
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
    gitLink: Links.structural.adapter.gitApiLink,
    wikiLink: Links.structural.adapter.wikiLink,
    sampleLink: Links.structural.adapter.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private  adapter: AdapterService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.adapter.adapter();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
