import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav, MenuController, PopoverController, ToastController, LoadingController } from 'ionic-angular';
import { DeterrentPage } from '../deterrent/deterrent';
import { ParametersPage } from '../parameters/parameters';
import { HomePage } from '../home/home';

import { AccueilPage } from '../accueil/accueil';
import { Profile } from '../../models/profile';
import { User_profile } from '../../services/user_profile/user_profile.service';
import { profilListService } from '../../services/profil-list/profil-list.service';
//import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
//import { } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import {AngularFireList} from 'angularfire2/database/interfaces';

import * as firebase from 'firebase/app';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


//import  firebase from 'firebase';
import { database } from 'firebase';
import { FirstPage } from '../first/first';
import { ToastService } from '../../services/toast/toast.service';
import { error } from '@firebase/database/dist/esm/src/core/util/util';
//import { AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  profils : Observable <any[]>;

  user:User;
 
  theUserId :any;
  number: any;

  prof:Profile;

  @ViewChild(Nav) nav:Nav;
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
  private pro:profilListService,
    private usersSrv:User_profile,
    private loading : LoadingController,
    
  
    private toast:ToastController,
   private toastt : ToastService,
    private afAuth:AngularFireAuth,
    
    private menuCtrl : MenuController,
   db : AngularFireDatabase,

   private  navParams : NavParams
  
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
    this.profils = db.list('profile').valueChanges();
     
    var myUserId=firebase.auth().currentUser.uid;
    this.menuCtrl.enable(true,'myMenu');
       
    this.profils = db.list('/profile').valueChanges();
  
    //this.profils = db .list('/profile');
    ///////
    console.log(myUserId);
    /////////
    this.displayUser(myUserId);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  displayUser(theUserId)
  {
    var that=this;
    this.usersSrv.viewUser(theUserId).then(snapshot=>{
     
      that.number=snapshot.val().number;
      that.theUserId=snapshot.val().theUserId;
     
      
    })                                                                                                                                                                                                                      
 
  }
  






      
ionViewWillLoad()
{
  this.pro = this.navParams.get('profile');

  this.afAuth.authState.take(1).subscribe(data=>{
  console.log(data);

  //this.profileData=this.afDatabase.object(`profile/data.uid}`)
    })
    //this.user=this.navParams.get('user');
  }
  gotoParam(){
    this.navCtrl.setRoot(ParametersPage);
  }
  gotoDeterrent(){
    this.navCtrl.setRoot(DeterrentPage);
  }
  
  gotoSettings(){
    this.navCtrl.setRoot(AccueilPage);
  }


}

