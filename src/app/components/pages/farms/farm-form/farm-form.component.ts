import { FarmsService } from '@services/farms.service';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { FileUploadComponent } from '@components/shared/file-upload/file-upload.component';
import Farm from 'src/app/interfaces/farm';

@Component({
  selector: 'app-farm-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatTooltipModule,
    FileUploadComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.scss'],
})
export class FarmFormComponent implements OnInit {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _farmsService = inject(FarmsService);

  public isFarmsLoading$ = this._farmsService.isLoading();

  @Input({ required: true }) formTitle!: string;
  @Input() farm: Farm;

  @Output() submitFarm = new EventEmitter<Farm>();

  farmForm!: FormGroup;

  ngOnInit(): void {
    this.farmForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      image: new FormControl(null),
    });

    if (this.farm) {
      this.farmForm?.patchValue(this.farm);
    }
  }

  onSubmitFarm(): void {
    this.submitFarm.emit(this.farmForm.getRawValue());
  }
}
