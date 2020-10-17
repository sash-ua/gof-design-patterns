import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {TemplateMethodService} from '../services/template-method.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.css']
})
export class TemplateMethodComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.templateMethod.gitApiLink,
    wikiLink: Links.behavioral.templateMethod.wikiLink,
    sampleLink: Links.behavioral.templateMethod.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private  tm: TemplateMethodService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.tm.templateMethod();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
