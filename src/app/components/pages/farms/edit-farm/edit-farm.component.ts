import { Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmFormComponent } from '../farm-form/farm-form.component';
import Farm from 'src/app/interfaces/farm';
import { ActivatedRoute } from '@angular/router';
import { FarmsService } from '@services/farms.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-edit-farm',
  standalone: true,
  imports: [CommonModule, FarmFormComponent, MatProgressSpinnerModule],
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.scss'],
})
export class EditFarmComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly farmsService = inject(FarmsService);

  farm$: Observable<Farm>;

  ngOnInit(): void {
    const farmId = this.route.snapshot.paramMap.get('id');

    if (farmId) this.farm$ = this.farmsService.getFarm(farmId);
  }

  saveFarmChanges(farm: Farm): void {
    console.log('Save Farm: ', farm);
  }
}
