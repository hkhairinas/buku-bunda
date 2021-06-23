import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { Book } from '../models/book.interface';

//import AngularFirestore to make Queries.
import { AngularFirestore } from '@angular/fire/firestore';

//Import Component untuk fungsi update
// import { UpdaterecordComponent } from '../components/updaterecord/updaterecord.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  public trxList: Observable<Book[]>;
  public list: Observable<Book[]>;

  constructor(
    private firestoreService: FirestoreService,
    private db: AngularFirestore,
  ) {
    // this.list = db.collection('transaction', ref => ref.orderBy('type'));
   }

  ngOnInit() {
    this.trxList = this.firestoreService.getTrx();
  }

}
