import { Injectable } from '@angular/core';
import {Ingredient} from "../ingredient";

@Injectable()
export class ShoppingListService {
  private items: Ingredient[];

  constructor() { }
  getItems() {
    console.log("==getItems===");
    console.log(this.items);
     return this.items;
  }

  addItems(items: Ingredient[]) {
    this.items = items;
    console.log("==addItems===");
    console.log(this.items);
  }

}
