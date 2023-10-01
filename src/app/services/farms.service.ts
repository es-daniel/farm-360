import { Injectable, OnDestroy, inject } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import Farm from '@interfaces/farm';
import {
  CollectionReference,
  Firestore,
  collection,
  addDoc,
  onSnapshot,
  Unsubscribe,
  QuerySnapshot,
  DocumentData,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  UpdateData,
} from '@angular/fire/firestore';
import { FileUploadService } from '@services/file-upload.service';
import { BehaviorSubject, Observable, ReplaySubject, Subject, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmsService implements OnDestroy {
  private readonly _firestore: Firestore = inject(Firestore);
  private readonly _fileUploadService = inject(FileUploadService);
  private readonly FARMS_COLLECTION = 'farms';
  private farmsCollection: CollectionReference = collection(this._firestore, this.FARMS_COLLECTION);

  private unsubscribeFarmsSnapshot: Unsubscribe;

  private loading$: Subject<boolean> = new Subject();
  private farmsList$: Subject<Farm[]> = new ReplaySubject<Farm[]>();
  private selectedFarm$: BehaviorSubject<Farm | null> = new BehaviorSubject<Farm | null>(null);

  constructor() {
    this.unsubscribeFarmsSnapshot = onSnapshot(this.farmsCollection, (farmsSnapshot: QuerySnapshot<DocumentData>) => {
      this.farmsList$.next(farmsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Farm[]);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeFarmsSnapshot();
  }

  public isLoading(): Observable<boolean> {
    return this.loading$;
  }

  public setSelectedFarm(farm: Farm): void {
    this.selectedFarm$.next(farm);
  }

  public getSelectedFarm(): Observable<Farm | null> {
    return this.selectedFarm$.asObservable();
  }

  public getFarms(): Observable<Farm[]> {
    return this.farmsList$;
  }

  public getFarm(id: string): Observable<Farm> {
    return from(getDoc(doc(this._firestore, this.FARMS_COLLECTION, id))).pipe(
      map(docSnapshot => ({ id: docSnapshot.id, ...docSnapshot.data() }) as Farm)
    );
  }

  public async createNewFarm(farm: Farm) {
    this.loading$.next(true);

    try {
      if (farm.image) {
        // Create image path and upload image to Firebase Storage
        farm.imagePath = `${this.FARMS_COLLECTION}/${uuidv4()}`;
        farm.imageUrl = await this._fileUploadService.pushFileToStorage(farm.imagePath, farm.image);
      }

      delete farm.image; // we don't need image file on fire store
      await addDoc(this.farmsCollection, farm);
    } catch (error) {
      console.error('An error happen while creating new farm: ', JSON.stringify(error));
    } finally {
      this.loading$.next(false);
    }
  }

  public async updateFarm(farm: Farm): Promise<void> {
    if (!farm?.id) return;

    try {
      this.loading$.next(true);
      const farmRef = doc(this._firestore, this.FARMS_COLLECTION, farm.id);

      if (farm.image) {
        // Create new farm image or update existing one
        farm.imagePath = farm.imagePath || `${this.FARMS_COLLECTION}/${uuidv4()}`;
        farm.imageUrl = await this._fileUploadService.pushFileToStorage(farm.imagePath, farm.image);
      }

      delete farm.image;
      delete farm.id;

      await updateDoc(farmRef, farm as UpdateData<Farm>);
    } catch (error) {
      console.error('An error happen while updating a farm: ', JSON.stringify(error));
    } finally {
      this.loading$.next(false);
    }
  }

  public async deleteSelectedFarm(): Promise<void> {
    try {
      const currentFarm = this.selectedFarm$.getValue();

      if (!currentFarm) return;

      if (currentFarm.id) {
        this.loading$.next(true);
        await deleteDoc(doc(this._firestore, this.FARMS_COLLECTION, currentFarm.id));
        if (currentFarm.imagePath) this._fileUploadService.deleteFileFromStorage(currentFarm.imagePath);
      }
    } catch (error) {
      console.error('An error happen while deleting a farm: ', JSON.stringify(error));
    } finally {
      this.loading$.next(false);
    }
  }
}
