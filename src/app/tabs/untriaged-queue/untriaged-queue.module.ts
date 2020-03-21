import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UntriagedQueuePageRoutingModule } from './untriaged-queue-routing.module';

import { UntriagedQueuePage } from './untriaged-queue.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, UntriagedQueuePageRoutingModule],
  declarations: [UntriagedQueuePage]
})
export class UntriagedQueuePageModule {}
