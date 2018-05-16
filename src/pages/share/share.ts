import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
message : string ='' ;
file : string = '';
link : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private menuCtrl:MenuController,
    private socialSharing: SocialSharing
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }
  share(){this.socialSharing.share(this.message , this.file , this.link)
.then(()=> {

}).catch(()=> {
  console.log(console.error);
})
  }

}
