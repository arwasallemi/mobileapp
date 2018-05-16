import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FirstPage } from '../first/first';
declare var google;

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-orig-dest',
  templateUrl: 'orig-dest.html',
})
export class OrigDestPage {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;
start : any;
end : any;
   
  calculateAndDisplayRoute() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    directionsService.route({
      origin:this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        window.alert('Directions request succeful' + status);
  //      this.navCtrl.setRoot(FirstPage); 
        
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  constructor( private menuCtrl:MenuController,public navParams: NavParams,public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone)  {
      this.menuCtrl.enable(true,'myMenu');
    
this.zoom = 4;
this.latitude = 39.8282;
this.longitude = -98.5795;

//create search FormControl
this.searchControl = new FormControl();

//set current position
this.setCurrentPosition();

}

ionViewDidLoad() {
//set google maps defaults
this.zoom = 4;
this.latitude = 39.8282;
this.longitude = -98.5795;
//create search FormControl
this.searchControl = new FormControl();
//set current position
this.setCurrentPosition();

//load Places Autocomplete
this.mapsAPILoader.load().then(() => {
let destinationInputBox = document.getElementById('destination').getElementsByTagName('input')[0];

let startInputBox = document.getElementById('start').getElementsByTagName('input')[0];
let autocompleteDest= new google.maps.places.Autocomplete(destinationInputBox, {
    types: ["address"]
});
let autocompleteStart= new google.maps.places.Autocomplete(startInputBox, {
  types: ["address"]
});
autocompleteDest.addListener("place_changed", () => {
    this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocompleteDest.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
    });
});
autocompleteStart.addListener("place_changed", () => {
  this.ngZone.run(() => {
      //get the place result
      let place: google.maps.places.PlaceResult = autocompleteStart.getPlace();

      //verify result
      if (place.geometry === undefined || place.geometry === null) {
          return;
      }

      //set latitude, longitude and zoom
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
      this.zoom = 12;
  });
});
});
//////

}

private setCurrentPosition() {
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
  });
}
}




}