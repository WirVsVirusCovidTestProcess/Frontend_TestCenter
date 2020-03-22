import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  public language: string = AppComponent.defaultLanguage;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}

  public languageChanged(event: any) {
    this.translateService.use(event.detail.value);
  }
}
