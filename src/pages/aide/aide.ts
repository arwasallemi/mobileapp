import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
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

/**
 * Generated class for the AidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aide',
  templateUrl: 'aide.html',
})
export class AidePage {
  private todo : FormGroup;
  profils : Observable <any[]>;
  profile= {}as Profile
  constructor(public navCtrl: NavController, 
    public afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase,
    public toast : ToastController ,
    public navParams: NavParams ,private menuCtrl:MenuController,
    private serviceprofil : profilListService,
    public db : AngularFireDatabase,
    private formBuilder: FormBuilder,
    public firebase : FirebaseApp
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
    this.todo = this.formBuilder.group({
      emailAide: ['', Validators.required],
      subject: ['', Validators.required],
      name: ['', Validators.required],


      msg: [''],
    });

    this.profils=this.serviceprofil.getprofilList().snapshotChanges().map(
      changes=>{
        return changes.map(c=> ({
          key:c.payload.key, ...c.payload.val()
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AidePage');
  }

  send(){
    this.afAuth.authState.take(1).subscribe(auth=>{
      this.afDatabase.object(`Aide/${auth.uid}`).set(this.profile).then(()=>this.navCtrl.push(FirstPage));
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
  
  reset(){
    this.navCtrl.setRoot(AidePage);
  
  }
  

}
