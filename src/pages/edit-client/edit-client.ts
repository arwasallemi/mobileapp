import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { profilListService } from '../../services/profil-list/profil-list.service';
import { HistoryPage } from '../history/history';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-client',
  templateUrl: 'edit-client.html',
})
export class EditClientPage {
  profile = {} as Profile ;

  constructor(private toast : ToastService,private serviceProfil : profilListService,public navCtrl: NavController, public navParams: NavParams
    ,private menuCtrl:MenuController
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }

  
  ionViewWillLoad() {
   this.profile = this.navParams.get('profile');
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  editClient(profile: Profile) {
    this.serviceProfil.modifier(profile).then(()=>{
    this.toast.show(`${profile.name} Saved!!!`);
   // this.navCtrl.setRoot('HistoryPage');
    }) ;
  } 

  delClient(profile:Profile){
    this.serviceProfil.deleteProfil(profile).then(()=>{
      this.toast.show(`${profile.name} deleted!!`);
    //  this.navCtrl.setRoot('HistoryPage');
    });
  }

  goBack(){
    this.navCtrl.push(HistoryPage);
  }





}
