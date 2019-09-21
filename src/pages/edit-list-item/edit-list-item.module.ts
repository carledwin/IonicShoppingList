import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditListItemPage } from './edit-list-item';

@NgModule({
  declarations: [
    EditListItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditListItemPage),
  ],
})
export class EditListItemPageModule {}
