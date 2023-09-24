import { FileUploadService } from './file-upload.service';
import { Injectable, inject } from '@angular/core';
import Farm from '../interfaces/farm';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  private fileUploadService = inject(FileUploadService);

  async createNewFarm(farm: Farm) {
    if (farm.image) {
      const uploadImageResult = await this.fileUploadService.pushFileToStorage('farms/abc', farm.image);
      console.log(' ref.fullPath: ', uploadImageResult.ref.fullPath);
    }
  }
}
