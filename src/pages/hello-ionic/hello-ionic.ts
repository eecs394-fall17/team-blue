import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';
import firebase from 'firebase';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  restaurants : Array<string>;

  constructor(public nav: NavController) {

    this.restaurants = ["Joy Yee Noodle"]

  }

  showRestaurantDetails(){
     this.nav.push(RestaurantPage,{
       name: 'Joy Yee Noodle',
       Rating: '70%'
     });
  }
}
