import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppColor } from 'src/app/constants/app-colors';

@Component({
  selector: 'app-farm-summary-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, HttpClientModule, MatIconModule],
  templateUrl: './farm-summary-card.component.html',
  styleUrls: ['./farm-summary-card.component.scss'],
})
export class FarmSummaryCardComponent {
  @Input() color: AppColor = AppColor.GREEN;
  @Input() icon = 'adult-cow';
  @Input({ required: true }) quantity!: number;
  @Input({ required: true }) description!: string;
}
