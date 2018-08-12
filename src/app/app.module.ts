import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UserPage } from '../pages/user/user';
import { EventsPage } from '../pages/events/events';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PlacePage } from '../pages/place/place';
import { CategoriesPage } from '../pages/categories/categories';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendarModule } from 'ionic3-calendar';

import { CategoryServiceProvider } from '../providers/category-service/category-service';
import { ListPlacesPage } from '../pages/list-places/list-places';
import { PlacesServiceProvider } from '../providers/places-services/places-service';
import { EventServiceProvider } from '../providers/event-services/event-service';
import { DateUtilsProvider } from '../providers/utils/dates-utils-services';

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    EventsPage,
    TabsControllerPage,
    PlacePage,
    CategoriesPage,
    ListPlacesPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    EventsPage,
    TabsControllerPage,
    PlacePage,
    CategoriesPage,
    ListPlacesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryServiceProvider,
    PlacesServiceProvider,
    EventServiceProvider,
    DateUtilsProvider
  ]
})
export class AppModule {}