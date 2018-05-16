import {Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Place } from '../model/place.model';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class PlacesService {

  private places: Place [] = [];
  private placeListRef=this.db.list<Place>('place');
 constructor(
    private storage : Storage,private db : AngularFireDatabase){ }
   
  
    addPlace(place: Place ) {
      this.places.push(place);
      this.storage.set('places',this.places);
    }
  
    getPlaces() {
     
      return this.storage.get('places')
      .then(

        (places) => {
          this.places = places == null ? [] : places;
          return this.places.slice();
        
        }
      );
    
    }

    getprofilList(){
      return this.placeListRef;
  }
   
      
delPlace(place : Place) {
  return this.placeListRef.remove(place.key);
}
    
  }