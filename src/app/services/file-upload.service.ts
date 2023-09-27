import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private readonly _storage: Storage = inject(Storage);

  async pushFileToStorage(filePath: string, file: File): Promise<string> {
    const storageRef = ref(this._storage, filePath);

    await uploadBytes(storageRef, file);

    return getDownloadURL(storageRef);
  }
}
