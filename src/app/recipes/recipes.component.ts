import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "./recipe-list/recipe";
import { RecipeService } from "./recipe.service"

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',

})
export class RecipesComponent implements OnInit {
 selectedRecipe: Recipe[];
  @Output() recipeSelect = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.selectedRecipe = this.recipeService.getRecipes();
    console.log(this.selectedRecipe);
  }

  onSelected(recipe: Recipe) {
    this.recipeSelect.emit(recipe)
  }
}
