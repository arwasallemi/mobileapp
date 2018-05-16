import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertePage } from './alerte';

@NgModule({
  declarations: [
    AlertePage,
  ],
  imports: [
    IonicPageModule.forChild(AlertePage),
  ],
})
export class AlertePageModule {}
