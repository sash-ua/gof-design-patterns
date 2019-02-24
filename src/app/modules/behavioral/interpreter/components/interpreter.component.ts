import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {InterpreterService} from '../services/interpreter.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-interpreter',
  templateUrl: './interpreter.component.html',
  styleUrls: ['./interpreter.component.css']
})
export class InterpreterComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.interpreter.gitApiLink,
    wikiLink: LINKS.behavioral.interpreter.wikiLink,
    sampleLink: LINKS.behavioral.interpreter.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private interpreter: InterpreterService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
