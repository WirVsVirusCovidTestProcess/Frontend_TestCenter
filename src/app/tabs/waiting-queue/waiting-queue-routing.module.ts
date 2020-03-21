import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingQueuePage } from './waiting-queue.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingQueuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingQueuePageRoutingModule {}
