import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {MementoService} from '../services/memento.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.memento.gitApiLink,
    wikiLink: Links.behavioral.memento.wikiLink,
    sampleLink: Links.behavioral.memento.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private memento: MementoService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.memento.memento();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
