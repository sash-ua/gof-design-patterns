import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {VisitorService} from '../services/visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.visitor;
  public sampleLink: string = SAMPLE_LINKS.behavioral.visitor;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private visitor: VisitorService) {
    this.visitor.visitior();
  }
}
