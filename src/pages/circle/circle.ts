import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MeetingPage } from '../meeting/meeting';

import { FriendsPage } from '../friends/friends';
import { InvitePage } from '../invite/invite';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

import { FirstPage } from '../first/first';
import { OrigDestPage } from '../orig-dest/orig-dest';
import { VideoPage } from '../video/video';


@IonicPage()
@Component({
  selector: 'page-circle',
  templateUrl: 'circle.html',
})
export class CirclePage {

  constructor(private menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.enable(true,'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CirclePage');
  }
tab1root=MeetingPage;

tab4root=OrigDestPage;
tab2root=VideoPage;

}
