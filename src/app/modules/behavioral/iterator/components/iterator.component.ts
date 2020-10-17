import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../constants/elements';
import {Links} from '../../../../constants/links';
import {IteratorService} from '../services/iterator.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: Links.behavioral.iterator.gitApiLink,
    wikiLink: Links.behavioral.iterator.wikiLink,
    sampleLink: Links.behavioral.iterator.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(
    private iterator: IteratorService,
    private di: DataInjectorService,
  ) {
  }

  ngOnInit(): void {
    this.iterator.iterator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
