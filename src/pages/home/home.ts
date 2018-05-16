import { Component , ViewChild,ElementRef } from '@angular/core';
import { NavController,ToastController,NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { profilListService } from '../../services/profil-list/profil-list.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profile = {} as Profile;
 
  constructor(
    public navParams : NavParams,
  
    public navCtrl: NavController,
    private profilListEdit : profilListService
  ) 
  {

    }

    ionViewDidLoad() {
      this.profile=this.navParams.get('profile');
    }
  
  /*  saveProfile(profile : Profile){
   
      this.profilListEdit.updateProfil(profile).then(()=>
    {
     // this.navCtrl.setRoot('HistoryPage');
    }
    );
  
    }*/
  
 
 }