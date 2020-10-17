import {Component, Input, OnInit,} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-embedded-container',
  templateUrl: './embedded-container.component.html',
  styleUrls: ['./embedded-container.component.css'],
})
export class EmbeddedContainerComponent implements OnInit {
  public trustedUrl: SafeUrl;
  @Input() queryString: string;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.queryString);
  }
}
