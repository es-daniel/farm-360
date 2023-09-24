import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

interface VoidNoopFunction {
  (_: FileList | File): void;
}
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
  ],
})

/**
 * For reference : https://blog.angular-university.io/angular-custom-form-controls/
 */
export class FileUploadComponent implements ControlValueAccessor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: VoidNoopFunction = (file: FileList | File) => noop;
  onTouched: VoidFunction = () => noop;
  disabled: boolean;

  // Implements ControlValueAccessor
  writeValue(files: FileList): void {
    this.files = files;
  }
  registerOnChange(fn: VoidNoopFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @Input() placeholder = 'Subir archivos';
  @Input() multipleFilesAccepted = false;
  @Input() filesAccepted: string;

  files: FileList;
  fileLabel = '';

  onSelectFiles(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.files) {
      this.files = target.files;
      this.fileLabel = this.getFilesLabel();
      this.onChange(this.multipleFilesAccepted ? this.files : this.files[0]);
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
