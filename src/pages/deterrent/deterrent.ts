import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, MenuController } from 'ionic-angular';

import { ParametersPage } from '../parameters/parameters';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-deterrent',
  templateUrl: 'deterrent.html',
})
export class DeterrentPage {
  @ViewChild(Nav) nav:Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeterrentPage');
  }
  gotoSettings(){
this.navCtrl.setRoot(SettingsPage);
  }
}
