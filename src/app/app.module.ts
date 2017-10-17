import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import {RestaurantPageModule} from '../pages/restaurant/restaurant.module';
import {RestaurantItem, RestaurantService, MenuItem, MenuService} from '../pages/restaurant-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

export const environment = {
    apiKey: "AIzaSyB9OHQ2wJ1nQiHo18RHve0fyTZ4Qi8F5Qc",
    authDomain: "shacuisine-a43ab.firebaseapp.com",
    databaseURL: "https://shacuisine-a43ab.firebaseio.com",
    projectId: "shacuisine-a43ab",
    storageBucket: "shacuisine-a43ab.appspot.com",
    messagingSenderId: "753679163545"
};


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment, 'shacuisine'),
    RestaurantPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantService,
    MenuService
  ]
})
export class AppModule {}
