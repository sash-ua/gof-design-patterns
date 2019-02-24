import {Component, OnInit} from '@angular/core';
import {BuilderService} from '../services/builder.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.builder.gitApiLink,
    wikiLink: LINKS.creational.builder.wikiLink,
    sampleLink: LINKS.creational.builder.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private builder: BuilderService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.builder.buildHouse();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
