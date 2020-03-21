import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultQueuePage } from './result-queue.page';

const routes: Routes = [
  {
    path: '',
    component: ResultQueuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultQueuePageRoutingModule {}
