import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import Farm from '@interfaces/farm';
import { MatCardModule } from '@angular/material/card';

import { FarmsService } from '@services/farms.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmptyStateComponent } from '@components/shared/empty-state/empty-state.component';

@Component({
  selector: 'app-farms',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, EmptyStateComponent],
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss'],
})
export class FarmsComponent {
  private readonly _farmsService = inject(FarmsService);

  public farms$: Observable<Farm[]> = this._farmsService.getFarms();
  public defaultFarmImage = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
}
