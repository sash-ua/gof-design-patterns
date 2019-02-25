import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StructuralComponent} from './structural.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('StructuralComponent', () => {
  let component: StructuralComponent;
  let fixture: ComponentFixture<StructuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralComponent],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
