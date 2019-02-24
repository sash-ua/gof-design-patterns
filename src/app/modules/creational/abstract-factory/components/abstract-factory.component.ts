import {Component, OnInit} from '@angular/core';
import {AbstractFactoryService} from '../services/abstract-factory.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {

  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.abstractFactory.gitApiLink,
    wikiLink: LINKS.creational.abstractFactory.wikiLink,
    sampleLink: LINKS.creational.abstractFactory.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(public car: AbstractFactoryService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.car.abstractFactory();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
