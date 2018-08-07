import {Component, OnInit} from '@angular/core';
import {WIKI_LINKS} from '../../../../wiki_links';
import {ELEMENTS} from '../../../../elements';
import {SAMPLE_LINKS} from '../../../../sample_links';
import {BridgeService} from '../services/bridge.service';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {
  public wikiLink: string = WIKI_LINKS.structural.bridge;
  public sampleLink: string = SAMPLE_LINKS.structural.bridge;
  public linkName = ELEMENTS.linkToSampleName;

  constructor(private bridge: BridgeService) {
    bridge.bridge();
  }

  ngOnInit() {
  }
}
