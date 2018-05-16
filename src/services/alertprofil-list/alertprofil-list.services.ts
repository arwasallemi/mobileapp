import { Injectable } from "@angular/core";

import { Item } from "../../models/item.model";
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class alertprofilListService{


    
    private alertprofilListRef = this.db.list<Item>('/alertprofil');
   
   
    constructor( private db  : AngularFireDatabase ) {
    } 
    getAlertprofilList() {
        return this.alertprofilListRef;
    }
    addItem( item : Item){
        return this.alertprofilListRef.push(item);
    }

}