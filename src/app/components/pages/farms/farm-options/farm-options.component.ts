import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '@components/shared/confirmation-dialog/confirmation-dialog.component';
import { Observable, take } from 'rxjs';
import { FarmsService } from '@services/farms.service';
import Farm from '@interfaces/farm';

enum FARM_OPTION {
  DELETE,
  VIEW_COWS,
}

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

  public FARM_OPTION = FARM_OPTION;
  public farm$: Observable<Farm | null> = this._farmsService.getSelectedFarm();
  public isLoading$: Observable<boolean> = this._farmsService.isLoading();

  public selectOption(optionSelected: FARM_OPTION): void {
    switch (optionSelected) {
      case FARM_OPTION.DELETE:
        this.deleteFarm();
        break;
      default:
        console.warn('Opción desconocida');
        break;
    }
  }

  private async deleteFarm(): Promise<void> {
    this._dialog
      .open(ConfirmationDialogComponent, {
        data: { title: 'Eliminar finca', question: '¿Seguro que deseas eliminar la finca selecciona?' },
        role: 'alertdialog',
        panelClass: 'confirmation-dialog',
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe(async (confirmed: boolean) => {
        if (confirmed) {
          await this._farmsService.deleteSelectedFarm();
          this._farmOptionsRef.dismiss();
        }
      });
  }
}
