import {Component, OnInit} from '@angular/core';
import {AbstractFactoryService} from '../services/abstract-factory.service';
import {Links} from '../../../../constants/links';
import {ELEMENTS} from '../../../../constants/elements';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {

  public patternCompData: PatternConfig = {
    gitLink: Links.creational.abstractFactory.gitApiLink,
    wikiLink: Links.creational.abstractFactory.wikiLink,
    sampleLink: Links.creational.abstractFactory.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    public car: AbstractFactoryService,
    private di: DataInjectorService
  ) {
  }

  ngOnInit(): void {
    this.car.abstractFactory();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
