import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirstPage } from '../first/first';
import { CirclePage } from '../circle/circle';
import { HistoryPage } from '../history/history';
import { ToastService } from '../../services/toast/toast.service';
import { HistoryProfilPage } from '../history-profil/history-profil';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AccueilPage } from '../accueil/accueil';
//import { Network } from '@ionic-native/network';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
passwordType : string ='password';
passwordShown : boolean = false;
user ={} as User;
private todo : FormGroup;
  constructor( private toast : ToastService, 
    private formBuilder: FormBuilder,
   private alertCtrl :AlertController,
    private toastCtrl : ToastController,
   private loadingCtrl : LoadingController,
   
    private menuCtrl:MenuController,private afauth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
 this.menuCtrl.enable(false,'myMenu');
 this.todo = this.formBuilder.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
});
  }

  

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LoginPage');
  }
 
async login(user:User){
const result= await this.afauth.auth.signInWithEmailAndPassword(user.email,user.password) .then(res => {
  this.navCtrl.setRoot(AccueilPage);
    // private toastCtrl : ToastController,
    let toastCtrl = this.toastCtrl.create({
      message: 'Welcome to PraxisApp',
      duration: 3000,
      position: 'top'
    });
    
  
    toastCtrl.present();
}, err => {
  let msg;
  switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
    case "auth/wrong-password":
      msg= "Email or Password is wrong.";
      break;

    case "auth/user-not-found":
      msg= 'User not found.'
      break;

    case "auth/invalid-email":
      msg= 'Email or Password is wrong.';
      break;
  }

  alert(msg);
});

}


/*logout(){
 const result=  this.afauth.auth.signOut();
}*/
register(){
  this.navCtrl.push(RegisterPage);
}

logForm(){
  console.log(this.todo.value)
}
reset()
{
  let prompt=this.alertCtrl.create({
    title:'Enter your email',
    message:"A new password will be sent to your email",
    inputs:[
      {
        name:'recoverEmail',
        placeholder:'you@exemple.com'
      },
    ],
      buttons:[
{
  text:'Cancel',
  handler:data=>{
    console.log('cancel clicked');
  }
},
{
  text:'reset password',
  handler:data=>{
    let loading=this.loadingCtrl.create({
      dismissOnPageChange:true,
      content:'Reseting your password...'
    });
    loading.present();
    this.resetpassword(data.recoverEmail).then(()=>{
loading.dismiss().then(()=>{
  let alert=this.alertCtrl.create({
    title:'check your email',
    subTitle:"password reset successful",
    buttons:['Ok']
  });
  alert.present();
})
},error=>{
  loading.dismiss();
let alert=this.alertCtrl.create({
  title:'Error reseting password',
  subTitle:error.message,
  buttons:['Ok']
});
alert.present();
}
);
}
}
      ]
    
  });
  prompt.present();
}
resetpassword(email:any){
return this.afauth.auth.sendPasswordResetEmail(email);
}

 togglePassword() {
  if(this.passwordShown) {
this.passwordShown = false;
this.passwordType = 'password';
  }
  else {
    this.passwordShown = true;
this.passwordType = 'text';
  }
  
  
}



}
