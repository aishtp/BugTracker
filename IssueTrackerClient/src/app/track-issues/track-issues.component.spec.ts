import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackIssuesComponent } from './track-issues.component';

describe('TrackIssuesComponent', () => {
  let component: TrackIssuesComponent;
  let fixture: ComponentFixture<TrackIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
