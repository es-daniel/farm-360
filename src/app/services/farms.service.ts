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
} from '@angular/fire/firestore';
import { FileUploadService } from '@services/file-upload.service';
import { Observable, ReplaySubject, Subject, from, map } from 'rxjs';

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

  constructor() {
    this.unsubscribeFarmsSnapshot = onSnapshot(this.farmsCollection, (farmsSnapshot: QuerySnapshot<DocumentData>) => {
      this.farmsList$.next(farmsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Farm[]);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeFarmsSnapshot();
  }

  getFarms(): Observable<Farm[]> {
    return this.farmsList$;
  }

  getFarm(id: string): Observable<Farm> {
    return from(getDoc(doc(this._firestore, this.FARMS_COLLECTION, id))).pipe(
      map(docSnapshot => ({ id: docSnapshot.id, ...docSnapshot.data() }) as Farm)
    );
  }

  isLoading(): Observable<boolean> {
    return this.loading$;
  }

  async createNewFarm(farm: Farm) {
    this.loading$.next(true);

    try {
      if (farm.image) {
        // Create image path and upload image to Firebase Storage
        farm.imagePath = `${this.FARMS_COLLECTION}/${uuidv4()}`;
        farm.imageUrl = await this._fileUploadService.pushFileToStorage(farm.imagePath, farm.image);
      }

      delete farm.image; // we don;t need image file on fire store
      await addDoc(this.farmsCollection, farm);
    } catch (error) {
      console.log('An error happen while creating new farm: ', JSON.stringify(error));
    } finally {
      this.loading$.next(false);
    }
  }
}
