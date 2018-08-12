import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../../models/categoryModel';

@Injectable()
export class CategoryServiceProvider {

  private categories: CategoryModel[] = [];

  constructor() {
    //this.getCategories();
  }

  getCategories() {
    return this.categories = [
      new CategoryModel('BAR',"Bares","bar-icon.png"),
      new CategoryModel('DISCO',"Boliches","disco-icon.png"),
      new CategoryModel('OTHER',"Otros","bar-icon.png")
    ];
  }
}
