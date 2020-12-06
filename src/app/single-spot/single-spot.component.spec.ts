import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSpotComponent } from './single-spot.component';

describe('SingleSpotComponent', () => {
  let component: SingleSpotComponent;
  let fixture: ComponentFixture<SingleSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
