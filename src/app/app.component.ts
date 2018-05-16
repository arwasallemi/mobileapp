import { Component,ViewChild} from '@angular/core';
import { Nav,Platform, ToastController, AlertController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { AlertePage } from '../pages/alerte/alerte';
import { MeetingPage } from '../pages/meeting/meeting';
import { CirclePage } from '../pages/circle/circle';
import { SettingsPage } from '../pages/settings/settings';
import { FriendsPage } from '../pages/friends/friends';
import { Storage } from '@ionic/storage';
import { AssignedalertPage } from '../pages/assignedalert/assignedalert';
import { HistoryPage } from '../pages/history/history';
import { VideoPage } from '../pages/video/video';
import { RegisterPage } from '../pages/register/register';
import { AjoutClientPage } from '../pages/ajout-client/ajout-client';
import { GalleryPage } from '../pages/gallery/gallery';
import { Network } from '@ionic-native/network';
import { HistoryProfilPage } from '../pages/history-profil/history-profil';
import { OrigDestPageModule } from '../pages/orig-dest/orig-dest.module';
import { OrigDestPage } from '../pages/orig-dest/orig-dest';
import { AidePage } from '../pages/aide/aide';
import { AproposPage } from '../pages/apropos/apropos';
import { SharePage } from '../pages/share/share';
import { AlertesmsPage } from '../pages/alertesms/alertesms';
import { SMS } from '@ionic-native/sms';

@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {


 

  rootPage:any = LoginPage;
  @ViewChild(Nav) nav:Nav;
  phoneNumber:number;
  constructor(
    private alertCtrl : AlertController,
    private sms : SMS,
    private app : App,
    private toast: ToastController, private network: Network,
    private storage: Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) 
  {
  
  
    this.platform.ready().then(() => {
     
     this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  
    this.platform.registerBackButtonAction(() => {
      let navv = this.app.getActiveNav();
      if (navv.canGoBack()){ //Can we go back?
      navv.pop();
      }else{
    
        let alert = this.alertCtrl.create({
          title: 'are you sure about leaving the app?',
          message: 'Content you have not saved will be deleted ",',
          buttons: [
            {
              
              text: 'yes',
              handler: () => {
                this.nav.setRoot(LoginPage);
              }
            },
            {
              text: 'Cancel',
              handler: () => {
            
              }
            }
          ]
        });
        alert.present();
     
      } 
      });
    

  }

  displayNetworkUpdate(connectionState: string){
    let networkType = this.network.type;
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  ionViewDidEnter() {
    this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
   
    this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }

  gotoAlerte(){
    this.nav.setRoot(AssignedalertPage);
  }
  gotoParam(){
    this.nav.setRoot(SettingsPage);
  }
  gotoLogOut(){
    let alert = this.alertCtrl.create({
      title: 'are you sure about leaving the app?',
      message: 'please confirm',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'yes',
          handler: () => {
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }
  
  gotoGallery() {
    this.nav.setRoot(GalleryPage);
  }
  gotoAide() {
    this.nav.setRoot(AidePage);
  }
  gotoApropos() {
    let alert = this.alertCtrl.create({
      title: 'A application which makes it possible to send and receive geolocalized warnings',
      message: 'Praxis App notify your family, your friends and you geolocate .Praxis App is a program that enables to inform immediately the selected people of my emergency situation. These selected people have already agreed to receive my alerts.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      
      ]
    });
    alert.present();
  }
  gotoShare() {
    this.nav.setRoot(SharePage);
  }
  gotoAlerteparsms(phoneNumber) {

      var options: {
        replaceLineBreaks : true,
        android : {
          intent : 'INTENT'
        }
      }
  
  
      this.sms.send(String(this.phoneNumber),'je suis dans une situation grave', options).then(() => {
        console.log("sms worked");
      
      });
    }
  
  

  gotoFriends(){
    this.nav.setRoot(FriendsPage);
  }
  gotoList(){
    this.nav.setRoot(CirclePage);
  }
  gotoProfil(){
    this.nav.setRoot(HistoryProfilPage);
  }
 
  
}

