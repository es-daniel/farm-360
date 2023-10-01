import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-farm-options',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './farm-options.component.html',
  styleUrls: ['./farm-options.component.scss'],
})
export class FarmOptionsComponent {
  deleteFarm(): void {
    console.log('Delete farm');
  }
}
