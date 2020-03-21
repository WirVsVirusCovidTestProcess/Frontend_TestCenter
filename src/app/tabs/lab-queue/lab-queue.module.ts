import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabQueuePageRoutingModule } from './lab-queue-routing.module';

import { LabQueuePage } from './lab-queue.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedModule, LabQueuePageRoutingModule],
  declarations: [LabQueuePage]
})
export class LabQueuePageModule {}
