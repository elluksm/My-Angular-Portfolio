import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { Ingredient } from "../../recipes/ingredient.model";
import { ToDoListService } from "../to-do-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') lForm: NgForm;
  subscription: Subscription; 
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private toDoListService: ToDoListService ) { }

  ngOnInit() {
    this.subscription = this.toDoListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.toDoListService.getIngredient(index);
        this.lForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit (form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.toDoListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.toDoListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
}

onClear () {
  this.lForm.reset();
  this.editMode = false;
}

onDelete () {
  this.toDoListService.deleteIngredient(this.editedItemIndex);
   this.onClear();
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
