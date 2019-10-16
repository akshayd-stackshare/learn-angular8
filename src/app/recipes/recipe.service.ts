import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a description',
      'https://www.bakedbyanintrovert.com/wp-content/uploads/2017/01/Basic-Vanilla-Cake_640-3.jpg',
      [new Ingredient('Chocolate', 1), new Ingredient('Sugar', 20)]),
    new Recipe('Another Test Recipe',
      'This is a description',
      'https://www.bakedbyanintrovert.com/wp-content/uploads/2017/01/Basic-Vanilla-Cake_640-3.jpg',
      [new Ingredient('Vanilla', 2), new Ingredient('Apple', 1)])
  ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // to return a copy to avoid returning the reference to the recipe property.
    }

    getRecipe(id: number) {
      return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}