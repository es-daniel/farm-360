import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFormComponent } from '../farm-form/farm-form.component';
import Farm from 'src/app/interfaces/farm';

@Component({
  selector: 'app-edit-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent],
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.scss'],
})
export class EditFarmComponent implements OnInit {
  farm: Farm;

  ngOnInit(): void {
    this.farm = {
      name: 'La Lucha',
    };
  }

  saveFarmChanges(farm: Farm): void {
    console.log('Save Farm: ', farm);
  }
}
