import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmSummaryComponent } from './farm-summary/farm-summary.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FarmSummaryComponent, DashboardMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
