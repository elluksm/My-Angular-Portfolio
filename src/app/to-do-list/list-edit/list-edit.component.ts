import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { ToDo } from "../to-do.model"
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
  editedItemId: number;
  editedItem: ToDo;

  constructor(private toDoListService: ToDoListService ) { }

  ngOnInit() {
    this.subscription = this.toDoListService.startedEditing.subscribe(
      (id: number) => {
     this.editedItemId = id;
     this.editMode = true;
     this.editedItem = this.toDoListService.getItem(this.editedItemId);
       this.lForm.setValue({
         name: this.editedItem.title,
         amount: this.editedItem.amount,
         category: this.editedItem.category
       })
      }
   );
 }

  onSubmit (form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.toDoListService.updateToDo( this.editedItemId , value.name, value.amount);
    } else {
      this.toDoListService.addToDo(value.name, value.amount, value.category);
    }
    this.editMode = false;
    form.reset();
}

onEditItem (id: number) {
  this.toDoListService.startedEditing.next(id);
}

onClear () {
  this.lForm.reset();
  this.editMode = false;
}

onDelete () {
   this.toDoListService.deleteIngredient(this.editedItemId);
   this.onClear();
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
