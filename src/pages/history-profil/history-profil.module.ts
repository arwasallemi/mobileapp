import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryProfilPage } from './history-profil';

@NgModule({
  declarations: [
    HistoryProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryProfilPage),
  ],
})
export class HistoryProfilPageModule {}
