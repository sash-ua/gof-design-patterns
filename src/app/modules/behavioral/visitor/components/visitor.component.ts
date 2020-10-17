import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
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
    gitLink: Links.behavioral.visitor.gitApiLink,
    wikiLink: Links.behavioral.visitor.wikiLink,
    sampleLink: Links.behavioral.visitor.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private visitor: VisitorService,
    private di: DataInjectorService,
    ) {
  }

  ngOnInit(): void {
    this.visitor.visitior();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
