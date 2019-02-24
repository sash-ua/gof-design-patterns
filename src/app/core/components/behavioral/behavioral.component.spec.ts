import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioralComponent } from './behavioral.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('BehavioralComponent', () => {
  let component: BehavioralComponent;
  let fixture: ComponentFixture<BehavioralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehavioralComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehavioralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
