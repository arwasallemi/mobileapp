import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { ProfilAlertPage } from '../../pages/profil-alert/profil-alert';
//import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AccueilPage } from '../accueil/accueil';

import * as firebase from 'firebase/app';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FIREBASE_CONFIG } from '../../app/app.firebase.config';
import { FirebaseApp  } from 'angularfire2';
import { profilListService } from '../../services/profil-list/profil-list.service';
import { FirstPage } from '../first/first';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { AlertLocation } from '../../models/alertlocation';
import { AlertPlacesService } from '../../services/alert-place.services';
import { OrigDestPage } from '../orig-dest/orig-dest';
/**
 * Generated class for the AlertePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerte',
  templateUrl: 'alerte.html',
})
export class AlertePage {
  alertType : any;
 
  date:any;
  code : any;
 alt : AlertLocation;

  private todo : FormGroup;
  alertsLocations : Observable <any[]>;
  alertLocation= {}as AlertLocation;
  constructor(public navCtrl: NavController, 
    public afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase,
    public toast : ToastController ,
    public navParams: NavParams ,private menuCtrl:MenuController,
    private servicelocation : AlertPlacesService ,
    public db : AngularFireDatabase,
    private formBuilder: FormBuilder,
    public firebase : FirebaseApp
  
  ) {
    var myUserId=firebase.auth().currentUser.uid;
    this.menuCtrl.enable(true,'myMenu');


       
  this.alertsLocations = db.list('/profile').valueChanges();

  //this.profils = db .list('/profile');
  ///////
  console.log(myUserId);
  /////////
  this.displayUser(myUserId);
    this.todo = this.formBuilder.group({
      alertType: ['', Validators.required],
    
    });

    this.alertsLocations=this.servicelocation.getPlaceList().snapshotChanges().map(
      changes=>{
        return changes.map(c=> ({
          key:c.payload.key, ...c.payload.val()
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertePage');
  }

  sendAlert(){
    this.afAuth.authState.take(1).subscribe(auth=>{
      this.afDatabase.object(`alert/${auth.uid}`).set(this.alertLocation).then(()=>this.navCtrl.push(OrigDestPage));
    });
    let toast = this.toast.create({
      message: 'alerts was sended successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
  logForm(){
    console.log(this.todo.value)
  }

  /////
  displayUser(theUserId)
    {
      var that=this;
      this.servicelocation.viewUser(theUserId).then(snapshot=>{
        that.alertType=snapshot.val().alertType;
        that.code=snapshot.val().code;
        that.date=snapshot.val().date;
     

        
      })                                                                                                                                                                                                                      
   
    }
    
    
 

  


  
        
  ionViewWillLoad()
  {
    this.alt = this.navParams.get('alert');
  
    this.afAuth.authState.take(1).subscribe(data=>{
    console.log(data);
  
    //this.profileData=this.afDatabase.object(`profile/data.uid}`)
      })
      //this.user=this.navParams.get('user');
    }
  
  
  

}
