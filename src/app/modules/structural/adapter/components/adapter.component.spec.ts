import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdapterComponent} from './adapter.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {GetGitContentService} from '../../../../core/services/http/get-git-content.service';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('AdapterComponent', () => {
  let component: AdapterComponent;
  let fixture: ComponentFixture<AdapterComponent>;
  let http: GetGitContentService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdapterComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {provide: DataInjectorService, useValue: DataInjectorServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
