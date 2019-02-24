import {SafeHtmlPipe} from './safe-html.pipe';
import {DomSanitizer} from '@angular/platform-browser';
import {TestBed} from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let pipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DomSanitizer
      ]
    });
  });
  it('create an instance', () => {
    const serv = TestBed.get(DomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
