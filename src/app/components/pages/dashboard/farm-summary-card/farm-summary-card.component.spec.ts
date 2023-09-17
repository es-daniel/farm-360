import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSummaryCardComponent } from './farm-summary-card.component';

describe('FarmSummaryCardComponent', () => {
  let component: FarmSummaryCardComponent;
  let fixture: ComponentFixture<FarmSummaryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FarmSummaryCardComponent],
    });
    fixture = TestBed.createComponent(FarmSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
