import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InterpreterComponent} from './interpreter.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('InterpreterComponent', () => {
  let component: InterpreterComponent;
  let fixture: ComponentFixture<InterpreterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterpreterComponent],
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
    fixture = TestBed.createComponent(InterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
