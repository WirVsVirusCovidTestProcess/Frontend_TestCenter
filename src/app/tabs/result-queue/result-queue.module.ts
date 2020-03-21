import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultQueuePageRoutingModule } from './result-queue-routing.module';

import { ResultQueuePage } from './result-queue.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, ResultQueuePageRoutingModule],
  declarations: [ResultQueuePage]
})
export class ResultQueuePageModule {}
