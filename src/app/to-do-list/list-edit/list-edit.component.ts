import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Ingredient } from "../../recipes/ingredient.model";
import { ToDoListService } from "../to-do-list.service";

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private toDoListService: ToDoListService ) { }

  ngOnInit() {
  }

  onAddItem () {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.toDoListService.addIngredient(newIngredient);
}
}
