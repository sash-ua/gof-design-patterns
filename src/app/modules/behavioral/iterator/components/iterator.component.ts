import {Component, OnInit} from '@angular/core';
import {ELEMENTS} from '../../../../elements';
import {LINKS} from '../../../../LINKS';
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
    gitLink: LINKS.behavioral.iterator.gitApiLink,
    wikiLink: LINKS.behavioral.iterator.wikiLink,
    sampleLink: LINKS.behavioral.iterator.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private iterator: IteratorService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.iterator.iterator();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
