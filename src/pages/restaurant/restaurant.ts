import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})

export class RestaurantPage {

  restaurant_obj : FirebaseObjectObservable<any>;
  dishes : FirebaseListObservable<any[]>;


  dishes_as_array : any;
  resObj:any;

  dish_arr : any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public db : AngularFireDatabase) {

    this.resObj = navParams.get('res');
    //this.dishes_as_array = JSON.parse(JSON.stringify(this.resObj.Dishes));
    this.dishes_as_array = this.resObj.Dishes;

    this.dishes_as_array = Object.keys(this.dishes_as_array).map((key) => {

          return this.dishes_as_array[key];
    } );




    console.log(this.dishes_as_array);


    //console.log(this.dishes_as_array);

    //this.restaurant_obj = db.object("/Restaurants/" + this.name);
    //this.restaurant_obj = db.object("/Restaurants/Joy Yee's");
    //this.restaurant_obj.subscribe(snapshot => console.log("got item"));

    //this.dishes = db.list( "/Restaurant/"  + this.resObj.Name + "/Dishes");
    //this.dishes.subscribe(dishes => this.dishes_as_array = this.dishes);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    //console.log(this.name);
  }

  showDish1Details(){

  }

  showDish2Details(){

  }

}
