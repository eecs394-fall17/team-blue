import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import {RestaurantPage} from '../restaurant/restaurant';
import {RestaurantItem, RestaurantService, MenuItem, MenuService} from '../restaurant-service';
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

@Injectable()
export class HelloIonicPage {

  restaurants : FirebaseListObservable<any[]>;
  fbobject: FirebaseObjectObservable<any[]>;
  //restaurants : Array<String>;

  items: any;
  resarray: any;
  restaurants_as_array : any;
  dishes_as_array : any;

  constructor(public nav: NavController, private restaurantService : RestaurantService , public db : AngularFireDatabase) {

    //this.items = db.list('Restaurants');
    //this.restaurants = restaurantService.getAllRestaurants();

    //this.restaurants = db.list("Restaurants");
    //this.restaurants.subscribe(restaurants => this.restaurants_as_array = this.restaurants);

    this.resarray = db.list('Restaurants')

    this.restaurants_as_array = Object.keys(this.restaurants).map((key) => {

          return this.restaurants[key];
    } ); 

    //this.restaurants_as_array = this.restaurants;

/**
  this.projects = af.list('/items').map((items) => {
    return items.map(item => {
      item.metadata = af.object('/items_meta/' + item.$key);
      return item;
    });
**/


  }

  showRestaurantDetails(resObject){
   this.nav.push(RestaurantPage,
     {
        res : resObject
    }

   );

}

}
