import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryServiceProvider } from './../../providers/category-service/category-service';
import { ListPlacesPage } from '../list-places/list-places';
import { CategoryModel } from '../../models/CategoryModel';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryService: CategoryServiceProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  getCategories() : CategoryModel[] {
    return this.categoryService.getCategories();
  }

  goToPlaces(category: CategoryModel) {
    this.navCtrl.push(ListPlacesPage, {category});
  }

  title() {
    return "Categorías";
  }
}
