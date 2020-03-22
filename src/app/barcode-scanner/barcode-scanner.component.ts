import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements OnInit {
  @ViewChild('scanner', { static: true })
  public scanner: ZXingScannerComponent;

  @Output()
  public codeScanned: EventEmitter<string> = new EventEmitter<string>();
  public cameraStatus: typeof CameraStatus = CameraStatus;
  public status: CameraStatus = CameraStatus.initialize;

  public formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14
  ];

  constructor() {}

  public ngOnInit() {
    this.scanner.permissionResponse.subscribe(val => {
      this.status = val ? CameraStatus.cameraFound : CameraStatus.cameraBlocked;
    });

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.status = CameraStatus.cameraFound;
      let foundDevice = false;
      for (const device of devices) {
        if (/back|rear|environment|integrated/gi.test(device.label)) {
          this.scanner.device = device;
          foundDevice = true;
          break;
        }
      }
      if (!foundDevice) {
        this.scanner.device = devices[0];
      }
    });
  }

  public scannedCode(event: string) {
    this.codeScanned.emit(event);
  }

  public askAgain() {
    this.scanner.askForPermission();
  }
}

enum CameraStatus {
  initialize,
  cameraFound,
  cameraBlocked,
  noCameraFound
}
