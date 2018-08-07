import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {AbstractFactoryService} from '../services/abstract-factory.service';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {ELEMENTS} from '../../../../elements';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent {
  public wikiLink: string = WIKI_LINKS.creational.abstractFactory;
  public sampleLink: string = SAMPLE_LINKS.creational.abstractFactory;
  public linkName = ELEMENTS.linkToSampleName;
  public fiesta: string;
  public focus: string;
  public mustang: string;


  constructor(public car: AbstractFactoryService) {
    this.fiesta = this.car.makeCar({name: 'Fiesta', power: 70});
    this.focus = this.car.makeCar({name: 'Focus', power: 80});
    this.mustang = this.car.makeCar({name: 'mustang', power: 120});
    // console.log('AbstractFactory:', this.fiesta);
    // console.log('AbstractFactory:', this.focus);
    // console.log('AbstractFactory:', this.mustang);
  }
}
