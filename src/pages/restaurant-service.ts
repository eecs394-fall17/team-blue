
//A Service class that implements the RestaurantItem and MenuItem Classes

import { Injectable } from '@angular/core';

import firebase from 'firebase';

export class RestaurantItem {

  id:number;
  title:string;
  rating:number;
  image:string;
  cuisine:string;

  constructor (id:number, title:string, rating:number, image:string, cuisine:string){

    this.id = id;
    this.title= title;
    this.rating = rating;
    this.image = image;
    this.cuisine = cuisine;

  }

}

@Injectable()
export class RestaurantService {

restaurants: Array<RestaurantItem>;

var rootRef = firebase.database().ref();
var joyyeenameref = rootRef.child("Restaurants/Joy-Yee's/Name");
joyyeenameref.once('value')
.then(function(dataSnapshot) {
    var joyyeename = dataSnapshot.val();
});

constructor(){

 this.restaurants = [
   new RestaurantItem(1, joyyeename, 70, "joyyee.png","Chinese")
 ]

}

getAllRestaurants(){

  return this.restaurants;
}


}

export class MenuItem {

id: number;
title: string;
rating: number;
image: string;
price: number;

constructor (id:number, title:string, rating:number, image:string, price: number){

  this.id = id;
  this.title= title;
  this.rating = rating;
  this.image = image;
  this.price = price;

}

}

@Injectable()
export class MenuService {

  dishes : Array<MenuItem>;

constructor(){


  this.dishes = [

      new MenuItem(1, "Spicy Basil Chicken with Fried Egg", 95, "Spicy_Basil_Chicken_with_Fried_Egg.png", 10.55),
        new MenuItem(2, "Black Pepper Beef", 90, "Black_Pepper_Beef.png", 10.55)

  ]
}

getAllDishes(){

  return this.dishes; 
}

}
