import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export type PatternConfig =  {
  gitLink: string,
  wikiLink: string,
  sampleLink: string,
  linkName: string,
  sample: string,
  content$?: Observable<string>
};


@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  @Input() patternCompData: PatternConfig;

  constructor() { }

  ngOnInit() {
  }

}
