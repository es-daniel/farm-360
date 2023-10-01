import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmOptionsComponent } from './farm-options.component';

describe('FarmOptionsComponent', () => {
  let component: FarmOptionsComponent;
  let fixture: ComponentFixture<FarmOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FarmOptionsComponent],
    });
    fixture = TestBed.createComponent(FarmOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
