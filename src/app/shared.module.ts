import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentModule } from './user-list/user-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserListComponentModule, TranslateModule, IonicModule],
  exports: [UserListComponentModule, TranslateModule]
})
export class SharedModule {}
