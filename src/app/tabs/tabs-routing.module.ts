import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'untriaged-queue',
        loadChildren: () => import('./untriaged-queue/untriaged-queue.module').then(m => m.UntriagedQueuePageModule)
      },
      {
        path: 'waiting-queue',
        loadChildren: () => import('./waiting-queue/waiting-queue.module').then(m => m.WaitingQueuePageModule)
      },
      {
        path: 'lab-queue',
        loadChildren: () => import('./lab-queue/lab-queue.module').then(m => m.LabQueuePageModule)
      },
      {
        path: 'result-queue',
        loadChildren: () => import('./result-queue/result-queue.module').then(m => m.ResultQueuePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/untriaged-queue',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/untriaged-queue',
    pathMatch: 'full'
  },
  {
    path: 'result-queue-dialog',
    loadChildren: () => import('./result-queue-dialog/result-queue-dialog.module').then( m => m.ResultQueueDialogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
