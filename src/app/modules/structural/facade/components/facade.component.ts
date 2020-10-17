import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {FacadeService} from '../services/facade.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.structural.facade.gitApiLink,
    wikiLink: Links.structural.facade.wikiLink,
    sampleLink: Links.structural.facade.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private  f: FacadeService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.f.facade();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
