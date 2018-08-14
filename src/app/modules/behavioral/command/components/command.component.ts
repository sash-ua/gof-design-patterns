import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {CalculatorService} from '../services/calculator.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.command;
  public sampleLink: string = SAMPLE_LINKS.behavioral.command;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private calc: CalculatorService) {
    this.calc.add([1, 2]);
    this.calc.cashedResult(0);
    this.calc.sub([1, 2]);
    this.calc.div([1, 2]);
    this.calc.div([1, 0]);
    this.calc.mult([22, 2]);
    this.calc.undo();
    this.calc.mult([22, 3]);
  }
}
