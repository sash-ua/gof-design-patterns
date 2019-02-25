import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FactoryMethodComponent} from './factory-method.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('FactoryMethodComponent', () => {
  let component: FactoryMethodComponent;
  let fixture: ComponentFixture<FactoryMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FactoryMethodComponent],
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
    fixture = TestBed.createComponent(FactoryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
