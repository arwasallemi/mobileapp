import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture } from '@ionic-native/media-capture';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(private mediaCapture:MediaCapture,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var options = { limit: 3, duration: 15 };
  
    this.mediaCapture.captureVideo(options).then(function(videoData) {
      
      
    }, function(err) {
  
      
    });
  
  }
 

}
