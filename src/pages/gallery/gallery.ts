import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, MenuController, Platform, ActionSheetController } from 'ionic-angular';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  photos: string[];
  @ViewChild(Nav) nav:Nav;
  public base64Image: string;

  constructor(public navCtrl: NavController,
    actionsheetCtrl : ActionSheetController,
    platform : Platform,
     public navParams: NavParams,public camera: Camera
    ,private menuCtrl:MenuController,
    private imagePicker : ImagePicker,
    private cropService: Crop
  
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }
  
  openeditprofile() {
    
  }


  async captureImage(useAlbum: boolean) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      ...useAlbum ? {sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM} : {}
    }

    const imageData = await this.camera.getPicture(options);

    this.base64Image = `data:image/jpeg;base64,${imageData}`;

    this.photos.unshift(this.base64Image);

  }


}
