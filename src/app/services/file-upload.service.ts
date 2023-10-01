import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, deleteObject } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private readonly _storage: Storage = inject(Storage);

  /**
   *  Update file to firebase storage
   *
   * @param filePath File path
   * @param file File data
   * @returns File download URL
   */
  public async pushFileToStorage(filePath: string, file: File): Promise<string> {
    const storageRef = ref(this._storage, filePath);

    await uploadBytes(storageRef, file);

    return getDownloadURL(storageRef);
  }

  /**
   * Delete a file on firebase storage
   *
   * @param filePath File path on bucket
   * @returns
   */
  public async deleteFileFromStorage(filePath: string): Promise<void> {
    const storageRef = ref(this._storage, filePath);

    return await deleteObject(storageRef);
  }
}
