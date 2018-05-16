import { FormsModule } from '@angular/forms';
import { MbscModule, mobiscroll } from '@mobiscroll/angular-trial';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { Network } from '@ionic-native/network';

//import { Contact } from '@ionic-native/contact';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AuthProvider } from '../providers/auth/auth';
import {Push} from '@ionic-native/push';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ParametersPage } from '../pages/parameters/parameters';
import { AlertePage } from '../pages/alerte/alerte';
import { MeetingPage } from '../pages/meeting/meeting';
import { CirclePage } from '../pages/circle/circle';
import { FriendsPage } from '../pages/friends/friends';
import { InvitePage } from '../pages/invite/invite';
import { DataProvider } from '../providers/data/data';
//import { JourneyPage } from '../pages/journey/journey';
import { FirstPage } from '../pages/first/first';
import {Geolocation} from '@ionic-native/geolocation';
import { DeterrentPage } from '../pages/deterrent/deterrent';
import { SettingsPage } from '../pages/settings/settings';
import { Contact } from '@ionic-native/contacts';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { PlacesService } from "../services/places.services";

import { AgmCoreModule } from '@agm/core';

import {SMS} from "@ionic-native/sms";
import {CallNumber} from "@ionic-native/call-number";
import { Contacts,ContactFieldType} from '@ionic-native/contacts';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { AlertListService } from '../services/alert-list/alert-list.service';
import { GalleryPage } from '../pages/gallery/gallery';
import { ProfilAlertPage } from '../pages/profil-alert/profil-alert';
import { AssignedalertPage } from '../pages/assignedalert/assignedalert';
import { HistoryPage } from '../pages/history/history';
import { VideoPage } from '../pages/video/video';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, AngularFireDatabaseProvider} from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { alertprofilListService } from '../services/alertprofil-list/alertprofil-list.services';
import { SqLitePage } from '../pages/sq-lite/sq-lite';
import { profilListService } from '../services/profil-list/profil-list.service';
import { AjoutClientPage } from '../pages/ajout-client/ajout-client';
import { EditClientPage } from '../pages/edit-client/edit-client';
import { ToastService } from '../services/toast/toast.service';
import { OrigDestPage } from '../pages/orig-dest/orig-dest';
import { HistoryProfilPage } from '../pages/history-profil/history-profil';
import { User_profile } from '../services/user_profile/user_profile.service';
import { HttpModule } from '@angular/http';
import { AidePage } from '../pages/aide/aide';
import { SharePage } from '../pages/share/share';
import { AproposPage } from '../pages/apropos/apropos';
import { AlertesmsPage } from '../pages/alertesms/alertesms';
import { AccueilPage } from '../pages/accueil/accueil';
import { FcmProvider } from '../providers/fcm/fcm';
import { AlertPlacesService } from '../services/alert-place.services';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';
//mobiscroll.apiKey = '524944eb';
@NgModule({

  declarations: [
    MyApp,
    HomePage,
  
    LoginPage,
    RegisterPage,

    ParametersPage,
    AlertePage,
    MeetingPage,
   CirclePage,
    FriendsPage,
    AccueilPage,
    //EditClientPage,
   
    InvitePage,

    //JourneyPage,
    FirstPage,
    DeterrentPage,
    SettingsPage,
    //placePage,
    OrigDestPage,
    HistoryProfilPage,
    AidePage,
    AproposPage,
    SharePage,
    AlertesmsPage,

    
    
   GalleryPage,
   ProfilAlertPage,
   AssignedalertPage,
   HistoryPage,
   VideoPage,
   // NewPlacePage,
    AjoutClientPage,

    SqLitePage,
  
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
 AgmCoreModule.forRoot({
  // apiKey: 'AIzaSyA_MnKQNtwJj-9I2OAwwAA56L7qKpgpRZs',
   libraries:["places"],
 }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    HttpModule,
    
  IonicStorageModule.forRoot(),

  
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,

    ParametersPage,
    AlertePage,
    MeetingPage,
   CirclePage,
   AccueilPage,
    FriendsPage,

    InvitePage,
    //JourneyPage,
    FirstPage,
    HistoryProfilPage,
    AccueilPage,
   //EditClientPage,
  
    DeterrentPage,
    SettingsPage,
  // placePage,
  //
  // NewPlacePage,

   GalleryPage,
   ProfilAlertPage,
   AssignedalertPage,
   HistoryPage,
   VideoPage,
   AjoutClientPage,
OrigDestPage,
AidePage,
AproposPage,
SharePage,
AlertesmsPage,
AccueilPage,


   SqLitePage,
 

  
  ],
  providers: [
    
    Geolocation,
    Contact,
    CallNumber,
    StatusBar,
    DataProvider,
    SplashScreen,
    Camera,
    MediaCapture,
    Contacts,
    Network,
    AlertListService,
    CallNumber,
    SMS,
    AuthProvider,
    Push,
    PlacesService,
    ToastService,
    AngularFireDatabaseProvider,
     Storage,
     SQLite,
     AngularFireDatabase,
     alertprofilListService,
     profilListService,
     PlacesService,
     AlertPlacesService,
     User_profile,
     SocialSharing,
     Crop,
     ImagePicker,
     
     
    {provide:  ErrorHandler, useClass: IonicErrorHandler},
    FcmProvider,
    Network
  ]
})
export class AppModule {}
