import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IteratorComponent} from './iterator.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('IteratorComponent', () => {
  let component: IteratorComponent;
  let fixture: ComponentFixture<IteratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IteratorComponent],
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
    fixture = TestBed.createComponent(IteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
