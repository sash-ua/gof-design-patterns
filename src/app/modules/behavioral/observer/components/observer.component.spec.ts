import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ObserverComponent} from './observer.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('ObserverComponent', () => {
  let component: ObserverComponent;
  let fixture: ComponentFixture<ObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObserverComponent],
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
    fixture = TestBed.createComponent(ObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
