import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Alert } from "ionic-angular";

@Injectable()
export class AlertListService{
    private alertListRef=this.db.list<Alert>('alert-list');
    constructor(private db:AngularFireDatabase){

    }

    addAlert(alert:Alert){
        return this.alertListRef.push(alert);
    }
}