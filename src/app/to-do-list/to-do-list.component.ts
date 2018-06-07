import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../recipes/ingredient.model";
import { ToDoListService } from "./to-do-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription; 
  
  constructor(private toDoListService: ToDoListService ) { }

  ngOnInit() {
    this.ingredients = this.toDoListService.getIngredients();
    this.subscription = this.toDoListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  onEditItem (index: number) {
    this.toDoListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
