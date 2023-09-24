import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() placeholder = 'Subir archivos';
  @Input() multipleFilesAccepted = false;
  @Output() uploadFiles: EventEmitter<FileList> = new EventEmitter<FileList>();

  files: FileList;
  fileLabel = '';

  onSelectFiles(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.files) {
      this.files = target.files;
      this.fileLabel = this.getFilesLabel();
    }
  }

  getFilesName() {
    return this.fileLabel;
  }

  getFilesLabel(): string {
    const filesSelected = this.files?.length;
    switch (filesSelected) {
      case 0:
        return 'Ningún archivo seleccionado';
      case 1:
        return this.files[0].name;
      default:
        return `${this.files.length} archivos seleccionados`;
    }
  }
}
