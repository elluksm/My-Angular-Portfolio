import { Injectable  } from '@angular/core';
import { Ingredient } from "../recipes/ingredient.model"
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  ingredientsChanged = new Subject<Ingredient[]>();

 private ingredients: Ingredient [] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 2)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); //get a copy of ingredients
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
   }
}
