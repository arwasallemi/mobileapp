import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Profile } from "../../models/profile";
import { AjoutClientPage } from "../../pages/ajout-client/ajout-client";


@Injectable()
export class profilListService{
    private profilListRef=this.db.list<Profile>('profile');
    
    
    constructor(private db : AngularFireDatabase){ }
getprofilList(){
    return this.profilListRef;
}
addClient(profile : Profile) {
    return this.profilListRef.push(profile);
}

modifier(profile:Profile) {
    return this.profilListRef.update(profile.key,profile);
}

deleteProfil(profile : Profile) {
    return this.profilListRef.remove(profile.key);
}
    



}