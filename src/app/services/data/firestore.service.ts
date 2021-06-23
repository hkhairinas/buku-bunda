import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable, Timestamp } from 'rxjs';
import { Book } from '../../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }
  //Menambah Data
  createTrx(
    description: string,
    amount: number,
    type: string,
    date: string,
  ): Promise<void> {
    const trxId = this.firestore.createId();
    return this.firestore.doc(`transaction/${trxId}`).set({
      trxId,
      description,
      amount,
      type,
      date,
    });
   }
   //Membaca Data
   getTrx(): Observable<Book[]> {
     return this.firestore.collection<Book>(`transaction`).valueChanges();
   }
   //Membaca Detail Data
   getTrxDetail(trxId: string): Observable<Book>{
     return this.firestore.collection('transaction').doc<Book>(trxId).valueChanges();
   }
   //Mengupdate Data

   //Menghapus Data
   deleteTrx(trxId: string): Promise<void>{
     return this.firestore.doc(`transaction/${trxId}`).delete();
   }


}
