import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
import { ToDoListService } from "../to-do-list/to-do-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe ("Greek Lemon Chicken and Potato Bake", 
    "Place chicken quarters on prepared baking sheet. Stir potatoes, olive oil, juice of 1 lemon, basil, oregano, salt, pepper, and lemon herb seasoning together in a large bowl to coat potatoes. Arrange potatoes around chicken on baking sheet. Pour about 3/4 of oil mixture over chicken, reserving remaining oil; drizzle remaining lemon juice over chicken and potatoes.", 
    "1h 10m", 
    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=549d2b7a71978de6e5320ba19fb4d21e&auto=format&fit=crop&w=755&q=80",
  [
  new Ingredient("chicken leg quarters", "4"), 
  new Ingredient("olive oil", "1/2 cup "),
  new Ingredient("dried basil", "2 tablespoons"),
  new Ingredient("small potatoes", "1 bag"),
  new Ingredient("lemons, juiced, divided", "2"),
  new Ingredient("ground black pepper", "1 tablespoon")
]),
new Recipe ("Spongy Japanese Cheesecake", 
"Place cream cheese in a bowl with milk; soak for 20 minutes. Sift cake flour and cornstarch together into a bowl. Sift again into the cream cheese mixture; mix well. Add egg yolks and lemon juice and mix well. Bake in the preheated oven until cheesecake is set and golden brown on top, about 1 hour 10 minutes. Turn off oven and leave cake in oven with door ajar for 1 hour. Transfer to a wire rack to cool completely.", 
"3h 15m", 
"https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5ebccf486bd987192ad19be2f2f9e5f&auto=format&fit=crop&w=751&q=80",
[
new Ingredient("cream cheese, cubed", "1 package"), 
new Ingredient("milk", "1/2 cup "),
new Ingredient("egg whites", "6"),
new Ingredient("superfine sugar", "10 tablespoons"),
new Ingredient("fresh lemon juice", "1 tablespoon"),
new Ingredient("cake flour", "9 tablespoons")
]),

new Recipe ("French Baguettes", 
"Place 1 cup water, bread flour, sugar, salt and yeast into bread machine pan in the order recommended by manufacturer. Select Dough cycle, and press Start. Punch down dough. Cut dough in half, creating two 8x12 inch rectangles. Roll up each half of dough tightly, beginning at 12 inch side, pounding out any air bubbles as you go.  Make deep diagonal slashes across loaves every 2 inches, or make one lengthwise slash on each loaf. Cover, and let rise in a warm place for 30 to 40 minutes, or until doubled in bulk. Bake for 20 to 25 minutes in the preheated oven, or until golden brown.", 
"1h 50m", 
"https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22d738090b14113ac4c10a757173586d&auto=format&fit=crop&w=750&q=80",
[
new Ingredient("water", "1 cup"), 
new Ingredient("bread flour", "2 1/2 cup "),
new Ingredient("white sugar", "1 tablespoon"),
new Ingredient("salt", "1 teaspoon"),
new Ingredient("egg yolk", "1")
])];

  constructor(private toDoListService: ToDoListService) { }

  getRecipes() {
    return this.recipes.slice(); //get a copy of recipes
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.toDoListService.addIngredients(ingredients);
  // }
}
