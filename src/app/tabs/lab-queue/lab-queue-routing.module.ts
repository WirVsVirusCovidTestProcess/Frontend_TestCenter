import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabQueuePage } from './lab-queue.page';

const routes: Routes = [
  {
    path: '',
    component: LabQueuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabQueuePageRoutingModule {}
