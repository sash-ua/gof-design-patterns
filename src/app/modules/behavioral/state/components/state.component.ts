import {Component} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  public wikiLink: string = WIKI_LINKS.behavioral.state;
  public sampleLink: string = SAMPLE_LINKS.behavioral.state;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private  state: StateService) {
    this.state.state();
  }
}
