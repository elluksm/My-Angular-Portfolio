import { Injectable  } from '@angular/core';
import { ToDo } from "./to-do.model"
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  ingredientsChanged = new Subject<ToDo[]>();
  startedEditing = new Subject<number>();
  indexForDeleting: number;
  indexForUpdating: number;
  idForAddingToDo: number = 20;

  private toDoList: ToDo [] = [
    new ToDo (1, "Apples", 5, false, 0),
    new ToDo (2, "Biscuits", 3, false, 0),
    new ToDo (3, "Cola", 2, false, 0),
    new ToDo (4, "Water", 1, false, 0),
    new ToDo (5, "Sunglasses", 1, false, 1),
    new ToDo (6, "Map of Rome", 1, false, 1),
    new ToDo (7, "Walking shoes", 2,false, 1),
    new ToDo (8, "Umbrella", 1, false, 1),
    new ToDo (9, "T-shirts", 3, false, 1),
    new ToDo (10, "Toothbrush", 1, false, 1),
    new ToDo (11,"Book a hotel in Rome", null, false, 2),
    new ToDo (12, "Rent a car for 5 days", null, false, 2),
    new ToDo (13, "Find someone who will feed my cat",null, false, 3)
  ];

  constructor() { }

  getShoppingList() {
     return this.toDoList.filter(toDoList => toDoList.category === 0);
  }

  getPackingList() {
    return this.toDoList.filter(toDoList => toDoList.category === 1);
 }

 getBookingList() {
  return this.toDoList.filter(toDoList => toDoList.category === 2);
}

  getOtherList() {
    return this.toDoList.filter(toDoList => toDoList.category === 3);
}

 getItem(id: number) {
  return this.toDoList.find(toDoList => toDoList.id === id);
   }

   addToDo(title: string, amount:number, category: number) {
    this.toDoList.push(new ToDo (this.idForAddingToDo, title, amount, false, +category));
    this.ingredientsChanged.next(this.toDoList);
    this.idForAddingToDo ++;
  }

  // addIngredients(ingredients: Ingredient[]) {
  //   this.shoppingList.push(...ingredients);
  //   this.ingredientsChanged.next(this.shoppingList.slice());
  //  }

  updateToDo (id: number, title: string, amount:number) {
    this.indexForUpdating = this.toDoList.findIndex( toDoList => toDoList.id === id );
      this.toDoList[this.indexForUpdating].title = title;
      this.toDoList[this.indexForUpdating].amount = amount;
      this.ingredientsChanged.next(this.toDoList);
   }

   deleteIngredient(id: number) {
    this.indexForDeleting = this.toDoList.findIndex( toDoList => toDoList.id === id );
     this.toDoList.splice(this.indexForDeleting, 1);
     this.ingredientsChanged.next(this.toDoList);
   }
}
