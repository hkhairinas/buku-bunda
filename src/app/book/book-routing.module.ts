import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPageRoutingModule {}
