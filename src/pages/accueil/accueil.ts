import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { database } from 'firebase/app';
import {Subscription} from 'rxjs/subscription';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
connected : Subscription;
disconnected : Subscription;
  constructor(public navCtrl: NavController,
    private network: Network, public navParams: NavParams  ,
    private toast : ToastController
    ,
    private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }

  displayNetworkUpdate(connectionState : string) {
   
   let networkType = this.network.type
   
    this.toast.create({
      message : `You are now  ${connectionState} via ${networkType}`,
    }).present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }
  ionViewWillLeave(){
    this.connected.unsubscribe();
  }

  ionViewDidEnter(){
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data)
    this.displayNetworkUpdate(data.type);
   } , error => console.error(error));
    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data)
    this.displayNetworkUpdate(data.type);
   } , error => console.error(error));

  }}
