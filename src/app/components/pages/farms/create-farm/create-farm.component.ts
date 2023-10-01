import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFormComponent } from '../farm-form/farm-form.component';
import Farm from 'src/app/interfaces/farm';
import { FarmsService } from '@services/farms.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent, AngularFireDatabaseModule, MatSnackBarModule],
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.scss'],
})
export class CreateFarmComponent {
  _farmsService = inject(FarmsService);
  _snackBar = inject(MatSnackBar);
  _router = inject(Router);

  async saveNewFarm(farm: Farm) {
    await this._farmsService.createNewFarm(farm);

    this._snackBar.open('Finca creada', '', { duration: 1000 });
    this._router.navigateByUrl('/farms');
  }
}
