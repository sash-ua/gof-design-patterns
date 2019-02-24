import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
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
    gitLink: LINKS.structural.decorator.gitApiLink,
    wikiLink: LINKS.structural.decorator.wikiLink,
    sampleLink: LINKS.structural.decorator.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private decorator: DecoratorService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.decorator.decorator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
