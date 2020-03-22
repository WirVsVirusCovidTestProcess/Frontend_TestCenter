import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentModule } from './user-list/user-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { BarcodeSannerModule } from './barcode-scanner/barcode-scanner.module';

@NgModule({
  imports: [CommonModule, UserListComponentModule, TranslateModule, IonicModule, BarcodeSannerModule],
  exports: [UserListComponentModule, TranslateModule, BarcodeSannerModule]
})
export class SharedModule {}
