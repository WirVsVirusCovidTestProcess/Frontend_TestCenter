import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentModule } from './user-list/user-list.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserListComponentModule, TranslateModule],
  exports: [UserListComponentModule, TranslateModule]
})
export class SharedModule {}
