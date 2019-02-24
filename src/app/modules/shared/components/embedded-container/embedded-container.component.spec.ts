import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EmbeddedContainerComponent} from './embedded-container.component';


describe('DescriptionComponent', () => {
  let component: EmbeddedContainerComponent;
  let fixture: ComponentFixture<EmbeddedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedContainerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
