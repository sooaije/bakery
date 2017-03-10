import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes:Recipe[] = [
    {
      name: "Cake",
      description: "butter-cake",
      image_path: "http://happybirthdaycakeimages.com/wp-content/uploads/2015/05/Vanilla-Strawberry-Birthday-Cake.jpg",
      ingredient: [
        {
          name: "eiei",
          amount: 9999
        },
        {
          name: "eiei2",
          amount: 9999
        }
      ]
    }, {
      name: "Chocolate cake1",
      description: "chocolate cake",
      image_path: "http://1.bp.blogspot.com/-hk32mutsOlg/U9gBSLhl3-I/AAAAAAAB08k/J4XOf74aGk4/s1600/Tarta+de+Kit-Kat.jpg",
      ingredient: []
    }, {
      name: "Cheese cake",
      description: "Cheese cake",
      image_path: "http://assets.kraftfoods.com/recipe_images/opendeploy/Dark-Chocolate-Ganache-Cheesecake-827_640x428.jpg",
      ingredient: []
    }
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
