import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public book: Book;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private alertContoller: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    const trxId: string = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getTrxDetail(trxId).subscribe(book => {
      this.book = book;
    });
  }

  async deleteTrx(trxId: string, description: string): Promise<void> {
    const alert = await this.alertContoller.create({
      message: `Apakah Yakin Menghapus ${description}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.firestoreService.deleteTrx(trxId).then(() => {
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });

    await alert.present();
  }

}
