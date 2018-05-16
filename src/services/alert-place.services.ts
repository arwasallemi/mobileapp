import { Injectable } from "@angular/core";
import { AlertLocation } from "../models/alertlocation";
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';


import { AngularFireDatabaseModule } from "angularfire2/database";

@Injectable()

export class AlertPlacesService {
    private data:any;
public fireAuth:any;
public placeList:any;
alert ={} as AlertLocation;
    private alertPlaceListRef=this.db.list<AlertLocation>('alert');
   

    
    constructor(private db : AngularFireDatabase,
        private http: Http
    
    ){ 

        this.fireAuth=firebase.auth();
this.placeList=firebase.database().ref('alert/');
        
        
    }

    viewUser(code:any){
        var placeRef=this.placeList.child(code);
        return placeRef.once('value');
    }
    
    loadUser(date){
        if(this.data){
            return Promise.resolve(this.data);
        } }
getPlaceList(){
    return this.alertPlaceListRef;
}


}



