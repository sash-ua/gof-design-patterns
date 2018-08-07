import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.command;
  public sampleLink: string = SAMPLE_LINKS.behavioral.command;
  public linkName = ELEMENTS.linkToSampleName;

  constructor() {
  }
}
