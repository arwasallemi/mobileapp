import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertePage } from '../alerte/alerte';
import { ProfilAlertPage } from '../profil-alert/profil-alert';
import { FirstPage } from '../first/first';
import { HistoryPage } from '../history/history';
//import { VideoPage } from '../video/video';

/**
 * Generated class for the AssignedalertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignedalert',
  templateUrl: 'assignedalert.html',
})
export class AssignedalertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignedalertPage');
  }

tab1root=AlertePage;
tab3root=FirstPage;
//tab4root=VideoPage;
tab5root=HistoryPage;

}
