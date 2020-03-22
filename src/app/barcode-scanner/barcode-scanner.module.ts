import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BarcodeScannerComponent } from './barcode-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ZXingScannerModule],
  declarations: [BarcodeScannerComponent],
  exports: [BarcodeScannerComponent]
})
export class BarcodeSannerModule {}
