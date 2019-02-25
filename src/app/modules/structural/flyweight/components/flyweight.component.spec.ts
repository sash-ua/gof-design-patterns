import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlyweightComponent} from './flyweight.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';

describe('FlyweightComponent', () => {
  let component: FlyweightComponent;
  let fixture: ComponentFixture<FlyweightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlyweightComponent],
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
    fixture = TestBed.createComponent(FlyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
