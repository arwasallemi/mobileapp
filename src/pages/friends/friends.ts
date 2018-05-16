import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { Contacts,ContactFieldType,IContactFindOptions} from '@ionic-native/contacts';

import {SMS} from "@ionic-native/sms";
import {CallNumber} from "@ionic-native/call-number";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';



@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {
  phoneNumber:number;
  wheretosearch:ContactFieldType []=["displayName"];
  q='';
  contactsFound=[];

  constructor(
    private contacts: Contacts,
    private sms : SMS,
     private callSvc : CallNumber,
     private toastCtrl : ToastController,
     public navCtrl: NavController, 
     public navParams: NavParams,
     private afauth:AngularFireAuth,
     private afDatabase:AngularFireDatabase,
     private menuCtrl:MenuController
  
    ) {
      this.menuCtrl.enable(true,'myMenu');
 this.search('');


  }
  search(q){
    const option : IContactFindOptions ={
      filter : q
    
      
    }
    this.contacts.find(this.wheretosearch,option).then(conts=>{
  this.contactsFound=conts;
  
  
  });
 // this.add(this.contacts.find);
 
 

 

}

add(contacts){
  this.afauth.authState.take(1).subscribe(auth =>{
  
    this.afDatabase.object(`contact`).set(this.contactsFound).then(()=>this.navCtrl.push(FirebaseApp));
    
     // private toastCtrl : ToastController,
    
      })
 let toastCtrl = this.toastCtrl.create({
      message: 'Person was transfered to Admin ',
      duration: 3000,
      position: 'top'
    });
    
  
    toastCtrl.present();

}

onKeyUp(ev) {
  this.search(ev.target.value);


 

}

  call(phoneNumber) {
    this.callSvc.callNumber(String(this.phoneNumber),true).then(()=> {
      console.log("");
    });

    
  }

  sendSMS(phoneNumber) {
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

 
 

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FriendsPage');

  }
 
}
  


