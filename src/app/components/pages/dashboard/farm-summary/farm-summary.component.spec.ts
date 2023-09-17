import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSummaryComponent } from './farm-summary.component';

describe('FarmSummaryComponent', () => {
  let component: FarmSummaryComponent;
  let fixture: ComponentFixture<FarmSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FarmSummaryComponent],
    });
    fixture = TestBed.createComponent(FarmSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
