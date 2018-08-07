import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {ELEMENTS} from '../../../../elements';
import {PrototypeService} from '../services/prototype.service';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent {
  public wikiLink: string = WIKI_LINKS.creational.prototype;
  public sampleLink: string = SAMPLE_LINKS.creational.prototype;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private protoServ: PrototypeService) {
    this.protoServ.createClone();
  }
}
