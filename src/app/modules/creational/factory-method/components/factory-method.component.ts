import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {FactoryMethodService} from '../services/factory-method.service';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {ELEMENTS} from '../../../../elements';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent {
  public wikiLink: string = WIKI_LINKS.creational.factoryMethod;
  public sampleLink: string = SAMPLE_LINKS.creational.factoryMethod;
  public linkName = ELEMENTS.linkToSampleName;


  constructor(private factoryMethod: FactoryMethodService) {
    this.factoryMethod.factoryMethod();
  }
}
