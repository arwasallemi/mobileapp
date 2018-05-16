import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqLitePage } from './sq-lite';

@NgModule({
  declarations: [
    SqLitePage,
  ],
  imports: [
    IonicPageModule.forChild(SqLitePage),
  ],
})
export class SqLitePageModule {}
