import { Injectable  } from '@angular/core';
import { Ingredient } from "../recipes/ingredient.model"
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

 private ingredients: Ingredient [] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 2)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); //get a copy of ingredients
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
   }

   updateIngredient (index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
   }

   deleteIngredient(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
}