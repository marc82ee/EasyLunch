import { Component,OnInit } from '@angular/core';

import dishes from "../../data/menu";
import { Dish } from '../../data/dish.interface';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit {
  menu: {category:string, dishes: Dish[], icon:string}[];

  ngOnInit(){
    this.menu = dishes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
