import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';
import {RestaurantItem, RestaurantService, MenuItem, MenuService} from '../restaurant-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

  restaurants : any;
  //restaurants : Array<String>;

  constructor(public nav: NavController, private restaurantService : RestaurantService) {

    this.restaurants = restaurantService.getAllRestaurants();
    //this.restaurants = ["Joy Yee Noodle"]

  }

  showRestaurantDetails(){
     this.nav.push(RestaurantPage,{
       name: 'Joy Yee Noodle',
       Rating: '70%'
     });
  }
}
