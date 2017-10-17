import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import firebase from 'firebase';
import { Injectable } from '@angular/core';
import {RestaurantPage} from '../restaurant/restaurant';
import {RestaurantItem, RestaurantService, MenuItem, MenuService} from '../restaurant-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

@Injectable()
export class HelloIonicPage {

  restaurants : FirebaseListObservable<any[]>;
  fbobject: FirebaseObjectObservable<any[]>;
  //restaurants : Array<String>;

  restaurants_as_array : any;

  constructor(public nav: NavController, private restaurantService : RestaurantService , public db : AngularFireDatabase) {


    //this.restaurants = restaurantService.getAllRestaurants();

    this.restaurants = db.list("/Restaurants");
    this.restaurants.subscribe(restaurants => this.restaurants_as_array = this.restaurants);

    this.fbobject = db.object("Restaurants/Joy Yee's");
    this.fbobject.subscribe(snapshot => console.log("got item"));
    //this.restaurants = ["Joy Yee Noodle"]

  }

  showRestaurantDetails(){
     this.nav.push(RestaurantPage,{
       name: 'Joy Yee Noodle',
       Rating: '70%'
     });
  }
}
