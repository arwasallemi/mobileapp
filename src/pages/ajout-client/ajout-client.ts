import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController, Config, LoadingController } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { profilListService } from '../../services/profil-list/profil-list.service';
import { CirclePage } from '../circle/circle';
import { AngularFireAuth } from 'angularfire2/auth';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirstPage } from '../first/first';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import {storage}  from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Camera , CameraOptions } from '@ionic-native/camera';
//import {Validators, FormBuilder, FormGroup } from '@angular/forms';


import {AngularFireList} from 'angularfire2/database/interfaces';

import * as firebase from 'firebase/app';
import { FIREBASE_CONFIG } from '../../app/app.firebase.config';
import { FirebaseApp  } from 'angularfire2';
import { RegisterPage } from '../register/register';
import { HistoryProfilPage } from '../history-profil/history-profil';


@IonicPage()
@Component({
  selector: 'page-ajout-client',
  templateUrl: 'ajout-client.html',
})
export class AjoutClientPage {
  private todo : FormGroup;
  profils : Observable <any[]>;
 picdata : any
 picurl : any
 public image: any;
 mypicref: any


  profile= {}as Profile
  constructor(
    private formBuilder: FormBuilder ,
    public camera : Camera,
    public loadingCtrl : LoadingController,
    public afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase,
   public toast : ToastController ,private profilList : profilListService,
   public navCtrl: NavController, public navParams: NavParams
   ,
   private serviceprofil : profilListService,
   public db : AngularFireDatabase,
   public firebase : FirebaseApp
  ) {


    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      dateBirth: ['', Validators.required],
      gender: ['', Validators.required],
      hairColor: ['', Validators.required],
      eyeColor: ['', Validators.required],
      build: ['', Validators.required],
      ethnicity: ['', Validators.required],
      nationality: ['', Validators.required],
      language: ['', Validators.required],
      

      height: [''],
    });

  
    
    
   //this.profils = db.list('/profile').valueChanges();
    this.profils=this.serviceprofil.getprofilList().snapshotChanges().map(
      changes=>{
        return changes.map(c=> ({
          key:c.payload.key, ...c.payload.val()
        }));
      });
  

  this.mypicref= firebase.storage().ref('profile/');
//this.getPhotoURL();
  }
  
  //https://ionicframework.com/docs/developer-resources/forms/


   async takePhoto(){
     try {
     const options : CameraOptions= {
        quality : 100,
        targetHeight :600,
        targetWidth : 600,
        destinationType : this.camera.DestinationType.DATA_URL,
        encodingType : this.camera.EncodingType.JPEG,
        mediaType : this.camera.MediaType.PICTURE,
          correctOrientation : true,
          saveToPhotoAlbum: true
      }
  const result= await this.camera.getPicture(options).then((imageData)=>{
  this.image = "data:image/jpeg;base64," + imageData;

});
 
 const pictures = storage().ref('pictures/myPhoto');
 pictures.putString(this.image,'data_url');
 let toast = this.toast.create({
  message: 'image was sended to administrator with successfully',
  duration: 3000,
  position: 'top'
});


toast.present();
}
 catch(e) {
console.error(e);
 } 
    }


createProfile(){
  this.afAuth.authState.take(1).subscribe(auth=>{
    this.afDatabase.object(`profile/${auth.uid}`).set(this.profile).then(()=>this.navCtrl.push(LoginPage));
 
    //console.log(ref.key);
    let toast = this.toast.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    });
    
  
    toast.present();
 
 
  })
}

reset(){
  this.navCtrl.setRoot(RegisterPage);

}

logForm(){
  console.log(this.todo.value)
}





}

  
   
  



