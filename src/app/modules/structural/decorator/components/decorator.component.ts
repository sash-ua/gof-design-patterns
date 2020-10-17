import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {DecoratorService} from '../services/decorator.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.structural.decorator.gitApiLink,
    wikiLink: Links.structural.decorator.wikiLink,
    sampleLink: Links.structural.decorator.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private decorator: DecoratorService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.decorator.decorator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
