import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MementoComponent} from './memento.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('MementoComponent', () => {
  let component: MementoComponent;
  let fixture: ComponentFixture<MementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MementoComponent],
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
    fixture = TestBed.createComponent(MementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
