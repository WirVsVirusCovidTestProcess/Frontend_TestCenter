import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UntriagedQueuePage } from './untriaged-queue.page';

const routes: Routes = [
  {
    path: '',
    component: UntriagedQueuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UntriagedQueuePageRoutingModule {}
