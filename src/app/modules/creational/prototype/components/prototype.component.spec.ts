import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrototypeComponent} from './prototype.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DATA_INJECTOR_SERVICE_STUB} from '../../../../test/data-injector-service.stub';

describe('PrototypeComponent', () => {
  let component: PrototypeComponent;
  let fixture: ComponentFixture<PrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrototypeComponent],
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
    fixture = TestBed.createComponent(PrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
