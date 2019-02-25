import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MediatorComponent} from './mediator.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('MediatorComponent', () => {
  let component: MediatorComponent;
  let fixture: ComponentFixture<MediatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediatorComponent],
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
    fixture = TestBed.createComponent(MediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
