import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {FlyweightService} from '../services/flyweight.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-flyweight',
  templateUrl: './flyweight.component.html',
  styleUrls: ['./flyweight.component.css']
})
export class FlyweightComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.structural.flyweight.gitApiLink,
    wikiLink: Links.structural.flyweight.wikiLink,
    sampleLink: Links.structural.flyweight.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private fl: FlyweightService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.fl.flyweight();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
