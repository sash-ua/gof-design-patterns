import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {CompositeService} from '../services/composite.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.structural.composite.gitApiLink,
    wikiLink: LINKS.structural.composite.wikiLink,
    sampleLink: LINKS.structural.composite.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private comp: CompositeService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.comp.composite();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
