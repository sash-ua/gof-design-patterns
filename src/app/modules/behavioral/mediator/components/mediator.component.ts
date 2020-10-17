import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {MediatorService} from '../services/mediator.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.mediator.gitApiLink,
    wikiLink: Links.behavioral.mediator.wikiLink,
    sampleLink: Links.behavioral.mediator.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private mediator: MediatorService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.mediator.mediator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
