import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertePage } from '../alerte/alerte';
//import  firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HistoryPage } from '../history/history';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Item } from '../../models/item.model';
import { alertprofilListService } from '../../services/alertprofil-list/alertprofil-list.services';
@IonicPage()
@Component({
  selector: 'page-profil-alert',
  templateUrl: 'profil-alert.html',
})
export class ProfilAlertPage {
 /* picdata : any;
  picurl: any;
  mypicref : any;
  alertprofil={} as Alertprofil; */

  item : Item = {
        customerid: 0,
        gender:'',
        height : 0,
        hair:  '',
        eye: '',
        build : '',
        ethnicity :'',
        nationality :'',
        language : ''
      
  }

  constructor(
    public camera: Camera,
    private alertProfil: alertprofilListService,
    public navCtrl: NavController, 
    public navParams: NavParams
    ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
//this.mypicref=firebase.storage().ref('/alertprofil/pic.png')
  }
  /*takepic(){
    this.camera.getPicture({
      quality : 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType :this.camera.PictureSourceType.CAMERA,
      encodingType : this.camera.EncodingType.PNG,
      saveToPhotoAlbum :true
      
  }).then((imagedata) => {
  this.picdata =imagedata;
  this.upload()
  })
  
  }*/
 /* upload() {
this.mypicref.child(this.uid()).child('pic.png')
.putString(this.picdata,'base64',{contentType : 'image/png'})
.then(savepic=> {
  this.picurl = savepic.downloadURL 

  
})
  } */

   
  

 /* uid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return this.uid;
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilAlertPage');
  }

  addItem(item : Item){
    this.alertProfil.addItem(item).then(ref => {
      console.log(ref.key);
    })


  }

/*
reset(){
  this.navCtrl.push(ProfilAlertPage);
}*/

  



}


