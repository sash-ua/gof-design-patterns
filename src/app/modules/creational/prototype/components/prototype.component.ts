import {Component, OnInit} from '@angular/core';
import {LINKS} from '../../../../LINKS';
import {ELEMENTS} from '../../../../elements';
import {PrototypeService} from '../services/prototype.service';
import {PatternConfig} from '../../../shared/components/pattern/pattern.component';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {
  public patternCompData: PatternConfig = {
    gitLink: LINKS.creational.prototype.gitApiLink,
    wikiLink: LINKS.creational.prototype.wikiLink,
    sampleLink: LINKS.creational.prototype.sampleLink,
    linkName: ELEMENTS.linkToSampleName,
    sample: ELEMENTS.sampleTitle
  };

  constructor(private protoServ: PrototypeService, private di: DataInjectorService) {
  }

  ngOnInit(): void {
    this.protoServ.prototype();
    this.patternCompData = this.di.getContent(this.patternCompData);
  }
}
