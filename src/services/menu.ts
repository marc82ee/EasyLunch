import { Dish } from "../data/dish.interface";

export class MenuService {
  private menuDishes: Dish[] = [];

 
  getFavoriteQuotes() {
    return this.menuDishes.slice();
  }
 
}