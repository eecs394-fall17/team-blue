import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';

import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

@Injectable()
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
