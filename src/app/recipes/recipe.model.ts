import { Ingredient } from "../recipes/ingredient.model"

export class Recipe {
   public name: string;
   public description: string;
   public timeToCook: string;
   public imagePath: string;
   public ingredients: Ingredient[];

   constructor(name: string, desc: string, timeToCook: string, imagePath:string, ingredients: Ingredient[]) {
       this.name = name;
       this.description = desc;
        this.timeToCook = timeToCook;
       this.imagePath = imagePath;
       this.ingredients = ingredients;
   }
}