import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, MenuController, LoadingController } from 'ionic-angular';
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
  selector: 'page-history-profil',
  templateUrl: 'history-profil.html',
})
export class HistoryProfilPage {

  imagePhoto;
  selectedPhoto;
  itemsRef : AngularFireList<any>;
  imageSource ;
  image : any;
  clientPhoto ;
  user:User;
  profils:Observable<any[]>;
  username:any;
  customerID : any;
  number: any;
  firstName: any;
  lastName : any;
  dateBirth : any;
  gender : any;
  height : any;
  hairColor : any;
  eyeColor : any;
  build:any;
  ethnicity : any;
  nationality : any;
  language : any ;
  base64Image : ImageData;
  prof:Profile;
  constructor(
    public popoverCtrl: PopoverController,
  private pro:profilListService,
    private usersSrv:User_profile,
    private loading : LoadingController,
    
  
    private toast:ToastController,
   private toastt : ToastService,
    private afAuth:AngularFireAuth,
    public navCtrl: NavController,
    private menuCtrl : MenuController,
   db : AngularFireDatabase,

   private  navParams : NavParams
    
    ) {

      
      
  var myUserId=firebase.auth().currentUser.uid;
  this.menuCtrl.enable(true,'myMenu');
     
  this.profils = db.list('/profile').valueChanges();

  //this.profils = db .list('/profile');
  ///////
  console.log(myUserId);
  /////////
  this.displayUser(myUserId);

    this.getVenueImage(this.image);
}
public getVenueImage(image){

    firebase.storage().ref().child("pictures/myPhoto").getDownloadURL().then((url)=>
    {this.imagePhoto =url; })
}


  
  
  
  deleteProfile(id){
this.itemsRef.remove(id);
  
  }
  editProfile(profile:Profile)
    {  this.usersSrv.modifprofile(profile).then(()=>{
      this.toastt.show(`${profile.name} Saved!!!`);
      this.navCtrl.setRoot(FirstPage);
      }) ;
      
    }




    
    displayUser(theUserId)
    {
      var that=this;
      this.usersSrv.viewUser(theUserId).then(snapshot=>{
        that.username=snapshot.val().name;
        that.build=snapshot.val().build;
      //  that.customerID=snapshot.val().customerID;
        that.dateBirth=snapshot.val().dateBirth;
        that.ethnicity=snapshot.val().ethnicity;
        that.eyeColor=snapshot.val().eyeColor;
        that.gender=snapshot.val().gender;
        that.hairColor=snapshot.val().hairColor;
        that.height=snapshot.val().height;
        that.language=snapshot.val().language;
        that.nationality=snapshot.val().nationality;
        that.number=snapshot.val().number;
        that.customerID=snapshot.val().$key; 
        that.image=snapshot.val().image;   

        
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
  
  }
  