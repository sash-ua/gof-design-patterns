import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiPatternDescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
  let component: WikiPatternDescriptionComponent;
  let fixture: ComponentFixture<WikiPatternDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPatternDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiPatternDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
