import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import {AngularFireList} from 'angularfire2/database/interfaces';

import * as firebase from 'firebase/app';
import { Profile } from '../../models/profile';
import { profilListService } from '../../services/profil-list/profil-list.service';
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  clientPhoto: any;
  imageSource: string;
  profils : Observable <any[]>;

  
  constructor
  (
    public db : AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private serviceprofil : profilListService,
    private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
     
  this.profils = db.list('/profile').valueChanges();

  this.profils=this.serviceprofil.getprofilList().snapshotChanges().map(
    changes=>{
      return changes.map(c=> ({
        key:c.payload.key, ...c.payload.val()
      }));
    });
  }
 
getPhotoURL(){
    firebase.storage().ref().child('image/'+ 
    this.imageSource+'.png').getDownloadURL().then((url)=>
  {
    this.clientPhoto = url;
  })
} 



}




