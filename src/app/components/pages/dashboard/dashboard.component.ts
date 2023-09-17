import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmSummaryComponent } from './farm-summary/farm-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FarmSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
