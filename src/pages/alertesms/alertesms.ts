import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the AlertesmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alertesms',
  templateUrl: 'alertesms.html',
})
export class AlertesmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertesmsPage');
  }

}
