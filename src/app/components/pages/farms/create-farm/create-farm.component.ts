import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFormComponent } from '../farm-form/farm-form.component';
import Farm from 'src/app/interfaces/farm';
import { FarmsService } from '@services/farms.service';

@Component({
  selector: 'app-create-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent, AngularFireDatabaseModule],
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.scss'],
})
export class CreateFarmComponent {
  farmsService = inject(FarmsService);

  async saveNewFarm(farm: Farm) {
    console.log('Create new farm:', farm);

    await this.farmsService.createNewFarm(farm);
  }
}
