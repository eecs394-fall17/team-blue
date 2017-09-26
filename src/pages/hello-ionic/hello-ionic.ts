import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaurantPage} from '../restaurant/restaurant';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
  constructor(public nav: NavController) {

  }

  showDetails(){
     this.nav.push(RestaurantPage,{
       name: 'Joy Yee Noodle',
       Rating: '70%'
     });
  }
}
