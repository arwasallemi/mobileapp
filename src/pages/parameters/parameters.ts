import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, MenuController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { MeetingPage } from '../meeting/meeting';
import { LoginPage } from '../login/login';
import { DeterrentPage } from '../deterrent/deterrent';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

/**
 * Generated class for the ParametersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parameters',
  templateUrl: 'parameters.html',
})
export class ParametersPage {

  @ViewChild(Nav) nav:Nav;
  toggleValue: Boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametersPage');
  }
  
  tab1root=FirstPage;
  tab2root=MeetingPage;
  tab4root=LoginPage;
 
  }

