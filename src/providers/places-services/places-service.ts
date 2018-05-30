import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaceModel } from '../../models/placeModel';
import { CategoryModel } from '../../models/CategoryModel';
import { GeolocationModel } from '../../models/GeolocationModel';

@Injectable()
export class PlacesServiceProvider {

  private places: PlaceModel[] = [];

  constructor() {
    //this.getCategories();
  }

  getPlaces() {
    return this.places = [
      new PlaceModel("Amerika Disco", 
        "bar-icon.png", 
        "Amerika Disco, un lugar para pasarla bien, divertirse y chupar.",
        ["BAR", "DISCO"],
      new GeolocationModel(-34.5987452, -58.4258378)),
      new PlaceModel("Glam", "bar-icon.png", "Glam", [ "DISCO"], new GeolocationModel(-34.5970167, -58.4116674)),
      new PlaceModel("Toms", "bar-icon.png", "Toms", ["OTHER"], new GeolocationModel(-34.6001203, -58.3781818))
    ]
  }

  getPlacesByCategory(category: CategoryModel) {
      return this.getPlaces().filter(place => place.categories.indexOf(category.code) != -1)
  }
}