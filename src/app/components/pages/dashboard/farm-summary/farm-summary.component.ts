import { AppColor } from 'src/app/constants/app-colors';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmSummaryCardComponent } from '../farm-summary-card/farm-summary-card.component';
import { CUSTOM_ICONS } from 'src/app/constants/custom-icons';

interface SummaryListItem {
  color: AppColor;
  icon: string;
  quantity: number;
  description: string;
}

// TODO: remove once getting data from server
const mockList: SummaryListItem[] = [
  {
    color: AppColor.GREEN,
    icon: CUSTOM_ICONS.ADULT_COW.LABEL,
    quantity: 23,
    description: 'Vacas',
  },
  {
    color: AppColor.LIGHT_GREEN,
    icon: CUSTOM_ICONS.BABY_COW.LABEL,
    quantity: 3,
    description: 'Terneros',
  },
  {
    color: AppColor.LIME,
    icon: CUSTOM_ICONS.PREGNANT_COW.LABEL,
    quantity: 2,
    description: 'Vacas printas',
  },
];

@Component({
  selector: 'app-farm-summary',
  standalone: true,
  imports: [CommonModule, FarmSummaryCardComponent],
  templateUrl: './farm-summary.component.html',
  styleUrls: ['./farm-summary.component.scss'],
})
export class FarmSummaryComponent {
  public readonly AppColor = AppColor;
  public readonly summaryList: SummaryListItem[] = mockList;
}
