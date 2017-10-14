
//A Service class that implements the RestaurantItem and MenuItem Classes

import { Injectable } from '@angular/core';

import firebase from 'firebase';

export class RestaurantItem {

  id:number;
  title:string;
  rating:string;
  image:string;
  cuisine:string;
  description:string;

  constructor (id:number, title:string, rating:string, image:string, cuisine:string, description:string){

    this.id = id;
    this.title= title;
    this.rating = rating;
    this.image = image;
    this.cuisine = cuisine;
    this.description = description;

  }

}

@Injectable()
export class RestaurantService {

  restaurants: Array<RestaurantItem>;
  joyyeename: string;
  joyyeetag: string;
  joyyeerating: string;
  joyyeedescription: string;

  peppername: string;
  peppertag: string;
  pepperrating: string;
  pepperdescription: string;


  constructor(){

    //root ref of the firebase database
    var rootRef = firebase.database().ref();


    //ref for all Joy Yee's related stuff
    var joyyeeref = rootRef.child("Restaurants/Joy-Yee's");

    //Getting all the restaurant data from firebase for Joy Yee's
    joyyeeref.child("Name").once('value').then(function(dataSnapshot) {this.joyyeename = dataSnapshot.val(); });
    joyyeeref.child("Tag").once('value').then(function(dataSnapshot) {this.joyyeetag = dataSnapshot.val(); });
    joyyeeref.child("Rating").once('value').then(function(dataSnapshot) {this.joyyeerating = dataSnapshot.val(); });
    joyyeeref.child("Description").once('value').then(function(dataSnapshot) {this.joyyeedescription = dataSnapshot.val(); });

    //Creating a restaurant item object with the relevant Joy Yee's information.
    this.restaurants.push(new RestaurantItem(1, this.joyyeename, this.joyyeerating, "joyyee.png", this.joyyeetag, this.joyyeedescription));
 

    //ref for all peppercorns stuff.
    var pepperref = rootRef.child("Restaurants/Peppercorns-Kitchen");

    //Getting all the restaurant data from firebase for Peppercorns Kitchen.
    pepperref.child("Name").once('value').then(function(dataSnapshot) {this.peppername = dataSnapshot.val(); });
    pepperref.child("Tag").once('value').then(function(dataSnapshot) {this.peppertag = dataSnapshot.val(); });
    pepperref.child("Rating").once('value').then(function(dataSnapshot) {this.pepperrating = dataSnapshot.val(); });
    pepperref.child("Description").once('value').then(function(dataSnapshot) {this.pepperdescription = dataSnapshot.val(); });

    //Creating the restaurant item  object with the relevant Peppcorn's Kitchen information.
    this.restaurants.push(new RestaurantItem(2, this.peppername, this.pepperrating, "pepper.png", this.peppertag, this.pepperdescription));

  }

  getAllRestaurants(){

    return this.restaurants;
  }

}

export class MenuItem {

  id: number;
  title: string;
  rating: string;
  image: string;
  price: number;
  allergies: string;

  constructor (id:number, title:string, rating:string, image:string, price: number, allergies: string){

    this.id = id;
    this.title= title;
    this.rating = rating;
    this.image = image;
    this.price = price;
    this.allergies = allergies;
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
