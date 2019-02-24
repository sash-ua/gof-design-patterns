import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
import {VisitorService} from '../services/visitor.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.behavioral.visitor.gitApiLink,
    wikiLink: LINKS.behavioral.visitor.wikiLink,
    sampleLink: LINKS.behavioral.visitor.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private visitor: VisitorService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.visitor.visitior();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
