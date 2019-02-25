import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DecoratorComponent} from './decorator.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('DecoratorComponent', () => {
  let component: DecoratorComponent;
  let fixture: ComponentFixture<DecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecoratorComponent],
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
    fixture = TestBed.createComponent(DecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
