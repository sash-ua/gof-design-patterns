import {SafeHtmlPipe} from './safe-html.pipe';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {TestBed} from '@angular/core/testing';

export const DomSanitizerStub = {
  bypassSecurityTrustHtml(str) {
    return str;
  }
};

describe('SafeHtmlPipe', () => {
  let pipe, sanitizer, spySanitizer;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule
      ],
      providers: [
        {provide: DomSanitizer, useValue: DomSanitizerStub}
      ]
    });
    sanitizer = TestBed.get(DomSanitizer);
    pipe = new SafeHtmlPipe(sanitizer);
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it(`should be equal to '<h1>Test</h1>'`, function () {
    expect(pipe.transform(`<h1>Test</h1>`)).toEqual(`<h1>Test</h1>`);
  });
});
