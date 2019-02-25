import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatternComponent} from './pattern.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SafeHtmlPipe} from '../../pipes/safe-html/safe-html.pipe';
import {PATTERN_CONFIG_MOCK} from '../../../../test/pattern-config.mock';

describe('PatternComponent', () => {
  let component: PatternComponent;
  let fixture: ComponentFixture<PatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PatternComponent,
        SafeHtmlPipe
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternComponent);
    component = fixture.componentInstance;
    component.patternCompData = PATTERN_CONFIG_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
