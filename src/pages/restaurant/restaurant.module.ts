import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantPage } from './restaurant';

import {Injectable} from '@angular/core';
import firebase from 'firebase';

@NgModule({
  declarations: [
    RestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantPage),
  ],
})

@Injectable()
export class RestaurantPageModule {}
