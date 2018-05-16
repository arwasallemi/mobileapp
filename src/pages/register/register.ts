import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AjoutClientPage } from '../ajout-client/ajout-client';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  passwordType : string ='password';
  passwordShown : boolean = false;
  user = {} as User;

  constructor( private afAuth : AngularFireAuth,
    private toast : ToastController,
    
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user : User) {
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
    .then(res => {
      this.navCtrl.setRoot(AjoutClientPage);
    
      let toast = this.toast.create({
        message: 'your account was added with successfully Please fill in the form below.  ',
        duration: 3000,
        position: 'top'
      });
      
      toast.present();  
   
    }, err => {
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/wrong-password":
          msg= "Email or Password is invalid.";
          break;
    
        case "auth/user-not-found":
          msg= 'User not found.'
          break;
    
        case "auth/invalid-email":
          msg= 'Email or Password is wrong.';
          break;
      }
    
      alert('email or password invalid');
    });
    
} 
  catch(e) {
    console.error(e);
  }

}

reset() {
  this.navCtrl.setRoot(LoginPage);

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