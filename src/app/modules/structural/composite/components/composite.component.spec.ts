import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompositeComponent} from './composite.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DATA_INJECTOR_SERVICE_STUB} from '../../../../test/data-injector-service.stub';

describe('CompositeComponent', () => {
  let component: CompositeComponent;
  let fixture: ComponentFixture<CompositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompositeComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        {provide: DataInjectorService, useValue: DATA_INJECTOR_SERVICE_STUB}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
