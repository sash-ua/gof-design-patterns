import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.css']
})
export class TemplateMethodComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.templateMethod;
  public sampleLink: string = SAMPLE_LINKS.behavioral.templateMethod;
  public linkName = ELEMENTS.linkToSampleName;

  constructor() {
  }
}
