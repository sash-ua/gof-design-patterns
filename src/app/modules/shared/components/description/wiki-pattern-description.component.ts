import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-wiki-pattern-description',
  templateUrl: './wiki-pattern-description.component.html',
  styleUrls: ['./wiki-pattern-description.component.css']
})
export class WikiPatternDescriptionComponent implements OnInit {
  public trustedUrl: SafeUrl;
  @Input() queryString: string;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.queryString);
  }

}
