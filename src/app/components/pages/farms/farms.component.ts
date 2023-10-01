import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';

import Farm from '@interfaces/farm';
import { FarmsService } from '@services/farms.service';
import { FarmOptionsComponent } from './farm-options/farm-options.component';
import { EmptyStateComponent } from '@components/shared/empty-state/empty-state.component';

@Component({
  selector: 'app-farms',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    EmptyStateComponent,
    MatMenuModule,
    MatBottomSheetModule,
  ],
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss'],
})
export class FarmsComponent {
  private readonly _farmsService = inject(FarmsService);
  private readonly _bottomSheet = inject(MatBottomSheet);

  public farms$: Observable<Farm[]> = this._farmsService.getFarms();
  public defaultFarmImage = './assets/icons/barn-1.svg';

  openFarmOptions(farmId: string): void {
    this._bottomSheet.open(FarmOptionsComponent, { data: farmId, panelClass: 'custom-bottom-sheet' });
  }
}
