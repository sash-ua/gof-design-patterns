import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {SingletonService} from '../services/singleton.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.creational.singleton.gitApiLink,
    wikiLink: Links.creational.singleton.wikiLink,
    sampleLink: Links.creational.singleton.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private singleton: SingletonService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.singleton.singleton();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
