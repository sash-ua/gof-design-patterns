import {Component, OnInit} from '@angular/core';
import {FactoryMethodService} from '../services/factory-method.service';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.factoryMethod.gitApiLink,
    wikiLink: LINKS.creational.factoryMethod.wikiLink,
    sampleLink: LINKS.creational.factoryMethod.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private factoryMethod: FactoryMethodService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.factoryMethod.factoryMethod();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
