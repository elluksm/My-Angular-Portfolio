import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
import { ToDoListService } from "../to-do-list/to-do-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe ("A Test Recipe", 
    "This is simply a test", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67fb2e7b1fbe39b18b51146234ef38aa&auto=format&fit=crop&w=1350&q=80",
  [new Ingredient("tomatoes", 5), new Ingredient("apples", 2)]),
    new Recipe ("A Test Recipe-2",
     "This is simply a test", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67fb2e7b1fbe39b18b51146234ef38aa&auto=format&fit=crop&w=1350&q=80",
   [new Ingredient("bread", 2), new Ingredient("cheese", 1)] )
  ];

  constructor(private toDoListService: ToDoListService) { }

  getRecipes() {
    return this.recipes.slice(); //get a copy of recipes
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.toDoListService.addIngredients(ingredients);
  }
}
