import { UploadTaskSnapshot } from './../../../node_modules/@firebase/storage-types/index.d';
import { Injectable, inject } from '@angular/core';
import { Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private fbStorage = inject(Storage);

  async pushFileToStorage(filePath: string, file: File): Promise<UploadTaskSnapshot> {
    const storageRef = this.fbStorage.ref(filePath);

    return storageRef.put(file);
  }
}
