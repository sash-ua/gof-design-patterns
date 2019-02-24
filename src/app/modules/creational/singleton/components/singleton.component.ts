import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
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
    gitLink: LINKS.creational.singleton.gitApiLink,
    wikiLink: LINKS.creational.singleton.wikiLink,
    sampleLink: LINKS.creational.singleton.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private singleton: SingletonService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.singleton.singleton();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
