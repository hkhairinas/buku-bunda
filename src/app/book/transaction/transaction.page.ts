import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  public createTrxForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createTrxForm = formBuilder.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      trxType: ['', Validators.required],
      dateTrx:['', Validators.required],
    });
   }

   async createTrx(){
     const loading = await this.loadingCtrl.create();
     const description = this.createTrxForm.value.description;
     const amount = this.createTrxForm.value.amount;
     const type = this.createTrxForm.value.trxType;
     const date = this.createTrxForm.value.dateTrx;

     this.firestoreService
     .createTrx(description, amount, type, date)
     .then(
       () => {
         loading.dismiss().then(() => {
           this.router.navigateByUrl('');
         });
       },
       error => {
         loading.dismiss().then(() => {
           console.error(error);
         });
       }
     );

     return await loading.present();
   }

  ngOnInit() {
  }

}
