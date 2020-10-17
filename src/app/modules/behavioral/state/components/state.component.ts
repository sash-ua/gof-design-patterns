import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {StateService} from '../services/state.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.state.gitApiLink,
    wikiLink: Links.behavioral.state.wikiLink,
    sampleLink: Links.behavioral.state.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private  state: StateService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.state.state();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
