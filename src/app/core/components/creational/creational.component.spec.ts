import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreationalComponent} from './creational.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('CreationalComponent', () => {
  let component: CreationalComponent;
  let fixture: ComponentFixture<CreationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreationalComponent],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
