import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '@components/shared/confirmation-dialog/confirmation-dialog.component';
import { take } from 'rxjs';
import { FarmsService } from '@services/farms.service';

@Component({
  selector: 'app-farm-options',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule],
  templateUrl: './farm-options.component.html',
  styleUrls: ['./farm-options.component.scss'],
})
export class FarmOptionsComponent {
  private readonly _dialog = inject(MatDialog);
  private readonly _farmOptionsRef = inject(MatBottomSheetRef<FarmOptionsComponent>);
  private readonly _farmsService = inject(FarmsService);

  public farmId: string = inject(MAT_BOTTOM_SHEET_DATA);
  public isDeletingFarm = false;

  selectDeleteFarm(): void {
    this._dialog
      .open(ConfirmationDialogComponent, {
        data: { title: 'Eliminar finca', question: '¿Seguro que deseas eliminar la finca selecciona?' },
        role: 'alertdialog',
        panelClass: 'confirmation-dialog',
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(async (confirmed: boolean) => {
        if (confirmed) await this.deleteFarm();
      });
  }

  private async deleteFarm(): Promise<void> {
    this.isDeletingFarm = true;
    await this._farmsService.deleteFarm(this.farmId);
    this.isDeletingFarm = false;
    this._farmOptionsRef.dismiss();
  }
}
