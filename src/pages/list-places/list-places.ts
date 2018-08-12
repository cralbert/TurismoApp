import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { CategoryModel } from '../../models/CategoryModel';
import { PlacesServiceProvider } from '../../providers/places-services/places-service';
import { PlaceModel } from '../../models/placeModel';
import { PlacePage } from '../place/place';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ListPlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-list-places',
  templateUrl: 'list-places.html',
  providers: [GoogleMaps, Geolocation]
})
export class ListPlacesPage {

  private category: CategoryModel;
  public viewMode: string = "list";
  placeList: PlaceModel[];
  map: GoogleMap;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            public placeService: PlacesServiceProvider,
            private plataform: Platform,
          private geolocation: Geolocation) {
    this.category = navParams.get("category");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPlacesPage');
    this.plataform.ready().then(() => {
      this.map = GoogleMaps.create("map");
    });
  }

  places() {
    this.placeList = this.placeService.getPlacesByCategory(this.category);
    return this.placeList;
  }

  title() {
    return this.category.title;
  }

  goToPlace(place: PlaceModel) {
    this.navCtrl.push(PlacePage, {place});
  }

  showMap() {
    this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {
      this.geolocation.getCurrentPosition().then(pos => {
        let position = new LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.animateCamera({target: position, zoom: 10});
      }).catch((error) => alert("Error current position method." + error));
    }).then(() => {
      this.showMarkers();
    })
    .catch((error) => alert("Error one map method." + error));
  }

  showMarkers() {
    this.placeList.forEach(place => {
      this.map.addMarker({
        position: {
          lat: place.geolocation.latitude,
          lng: place.geolocation.longitude
        },
        title: place.geolocation.title,
        icon: place.geolocation.icon
      }).then(this.onMarkerAdded);
    })
  }

  onMarkerAdded(marker: Marker) {
    marker.one(GoogleMapsEvent.MARKER_CLICK).then(() => {
      alert("Marker" + marker.getTitle() + " is clicked");
    });
  }
  
}
