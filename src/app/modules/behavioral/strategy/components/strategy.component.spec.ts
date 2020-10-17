import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StrategyComponent} from './strategy.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DATA_INJECTOR_SERVICE_STUB} from '../../../../test/data-injector-service.stub';

describe('StrategyComponent', () => {
  let component: StrategyComponent;
  let fixture: ComponentFixture<StrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyComponent],
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
    fixture = TestBed.createComponent(StrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
