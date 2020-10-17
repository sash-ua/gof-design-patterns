import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VisitorComponent} from './visitor.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DATA_INJECTOR_SERVICE_STUB} from '../../../../test/data-injector-service.stub';

describe('VisitorComponent', () => {
  let component: VisitorComponent;
  let fixture: ComponentFixture<VisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorComponent],
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
    fixture = TestBed.createComponent(VisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
