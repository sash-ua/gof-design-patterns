import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
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
    gitLink: LINKS.behavioral.command.gitApiLink,
    wikiLink: LINKS.behavioral.command.wikiLink,
    sampleLink: LINKS.behavioral.command.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private calc: CalculatorService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.calc.calculator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
