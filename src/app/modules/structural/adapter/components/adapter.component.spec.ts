import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdapterComponent} from './adapter.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {InterpreterService} from '../../../behavioral/interpreter/services/interpreter.service';
import {AdapterService} from '../services/adapter.service';

describe('AdapterComponent', () => {
  let component: AdapterComponent;
  let fixture: ComponentFixture<AdapterComponent>;
  let http: GetGitContentService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdapterComponent],
      providers: [
        GetGitContentService,
        InterpreterService,
        AdapterService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.get(GetGitContentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
