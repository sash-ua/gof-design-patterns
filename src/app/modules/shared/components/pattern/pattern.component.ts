import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';

export interface PatternConfig {
  gitLink: string;
  wikiLink: string;
  sampleLink: string;
  linkName: string;
  sample: string;
  content$?: Observable<string>;
}


@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent {
  @Input() patternCompData: PatternConfig;
}
