import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PlaceModel } from '../../models/placeModel';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {

  private place: PlaceModel;
  viewMode: string = "list";
  map;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.place = navParams.get("place")
  }
  
  title() {
    return this.place.name;
  }

}
