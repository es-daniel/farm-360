import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFormComponent } from '../farm-form/farm-form.component';
import Farm from 'src/app/interfaces/farm';

@Component({
  selector: 'app-create-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent],
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.scss'],
})
export class CreateFarmComponent {
  saveNewFarm(farm: Farm) {
    console.log('Create new farm:', farm);
  }
}
