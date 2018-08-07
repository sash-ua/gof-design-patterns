import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';

@Component({
  selector: 'app-interpreter',
  templateUrl: './interpreter.component.html',
  styleUrls: ['./interpreter.component.css']
})
export class InterpreterComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.interpreter;
  public sampleLink: string = SAMPLE_LINKS.behavioral.interpreter;
  public linkName = ELEMENTS.linkToSampleName;

  constructor() {
  }
}
