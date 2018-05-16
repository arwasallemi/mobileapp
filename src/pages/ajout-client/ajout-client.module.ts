import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutClientPage } from './ajout-client';

@NgModule({
  declarations: [
    AjoutClientPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutClientPage),
  ],
})
export class AjoutClientPageModule {}
