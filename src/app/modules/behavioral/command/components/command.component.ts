import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {CalculatorService} from '../services/calculator.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.command.gitApiLink,
    wikiLink: Links.behavioral.command.wikiLink,
    sampleLink: Links.behavioral.command.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private calc: CalculatorService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.calc.calculator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
