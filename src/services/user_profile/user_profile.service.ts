import { Injectable } from "@angular/core";
//import { constructor } from "localforage";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { Profile } from "../../models/profile";
import { AngularFireDatabase } from "angularfire2/database";

import { AngularFireDatabaseModule } from "angularfire2/database";
@Injectable()
export class User_profile
{
private data:any;
public fireAuth:any;
public userProfile:any;
profile ={} as Profile;
private usersListRef=this.db.list<Profile>('/profile');
constructor(private http: Http,private db:AngularFireDatabase){
this.fireAuth=firebase.auth();
this.userProfile=firebase.database().ref('profile/');
}
    viewUser(customerID:any){
        var userRef=this.userProfile.child(customerID);
        return userRef.once('value');
    }

    loadUser(number){
        if(this.data){
            return Promise.resolve(this.data);
        }
    }


    
    modifprofile(profile:Profile){ 

        return this.usersListRef.update(profile.key,profile);
        
    }
    removeprofile(profile:Profile){
        return this.usersListRef.remove(profile.key);
}
    }
