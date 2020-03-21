import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingQueuePageRoutingModule } from './waiting-queue-routing.module';

import { WaitingQueuePage } from './waiting-queue.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, WaitingQueuePageRoutingModule],
  declarations: [WaitingQueuePage]
})
export class WaitingQueuePageModule {}
