import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { UserPage } from '../user/user';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CategoriesPage;
  tab2Root: any = UserPage;
  tab3Root: any = EventsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
