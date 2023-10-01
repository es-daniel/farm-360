import { Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFormComponent } from '../farm-form/farm-form.component';
import Farm from 'src/app/interfaces/farm';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmsService } from '@services/farms.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent, MatProgressSpinnerModule, MatSnackBarModule],
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.scss'],
})
export class EditFarmComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _snackBar = inject(MatSnackBar);

  private readonly _farmsService = inject(FarmsService);

  farm$: Observable<Farm>;

  ngOnInit(): void {
    const farmId = this._route.snapshot.paramMap.get('id');

    if (farmId) this.farm$ = this._farmsService.getFarm(farmId);
  }

  async saveFarmChanges(farm: Farm): Promise<void> {
    await this._farmsService.updateFarm(farm);

    this._snackBar.open('Finca actualizada', '', { duration: 1000 });
    this._router.navigateByUrl('/farms');
  }
}
