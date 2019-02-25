import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TemplateMethodComponent} from './template-method.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {DataInjectorService} from '../../../../core/services/data-injector/data-injector.service';
import {DataInjectorServiceStub} from '../../../../test/data-injector-service.stub';


describe('TemplateMethodComponent', () => {
  let component: TemplateMethodComponent;
  let fixture: ComponentFixture<TemplateMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateMethodComponent],
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
    fixture = TestBed.createComponent(TemplateMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
