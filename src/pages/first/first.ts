import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, LoadingController, PopoverController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
import { ToastService } from '../../services/toast/toast.service';
import { error } from '@firebase/database/dist/esm/src/core/util/util';
//import { AngularFireList } from 'angularfire2/database';


 

declare var google;

 @IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  @ViewChild('map') mapElement : ElementRef;

  imagePhoto;
  selectedPhoto;
  itemsRef : AngularFireList<any>;
  imageSource ;
  image : any;
  clientPhoto ;
  user:User;
  profils:Observable<any[]>;
  username:any;
  
  firstName: any;
  lastName : any;
  
  base64Image : ImageData;
  prof:Profile;
  map: any;
  constructor(
    public geolocation : Geolocation,
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    private pro:profilListService,
      private usersSrv:User_profile,
      private loading : LoadingController,
      
    
      private toast:ToastController,
     private toastt : ToastService,
      private afAuth:AngularFireAuth,
     db : AngularFireDatabase,
  
     private  navParams : NavParams
    ,private menuCtrl:MenuController
  
) {
  this.menuCtrl.enable(true,'myMenu');

  var myUserId=firebase.auth().currentUser.uid;
  this.menuCtrl.enable(true,'myMenu');
     
  this.profils = db.list('/profile').valueChanges();
  console.log(myUserId);
  
  this.displayUser(myUserId);

    this.getVenueImage(this.image);
    
    
  }

 ionViewDidLoad() 
  {
  this.loadmap();
  }
  public getVenueImage(image){

    firebase.storage().ref().child("pictures/myPhoto").getDownloadURL().then((url)=>
    {this.imagePhoto =url; })
}

 
displayUser(theUserId)
{
  var that=this;
  this.usersSrv.viewUser(theUserId).then(snapshot=>{
    that.username=snapshot.val().name;
   
    that.image=snapshot.val().image;   
    that.firstName=snapshot.val().firstName;   
    that.lastName=snapshot.val().lastName;   

    
  })                                                                                                                                                                                                                      

}







    
ionViewWillLoad()
{
this.pro = this.navParams.get('profile');

this.afAuth.authState.take(1).subscribe(data=>{
console.log(data);

  })
}
 

 /*----------------------------------------------------------------------------------------*/

loadmap(){
  this.geolocation.getCurrentPosition().then((position)=> {
  var latlong = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  var options = {
    center : latlong,
    zoom: 14,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }
  this.map= new google.maps.Map(this.mapElement.nativeElement,options);
  var marker = new google.maps.Marker({
    position: latlong,
    map: this.map });
});



}
}

