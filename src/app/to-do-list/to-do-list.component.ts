import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from "./to-do.model"
import { ToDoListService } from "./to-do-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  shoppingList: ToDo[];
  packingList: ToDo[];
  bookingList: ToDo[];
  otherList: ToDo[];
  private subscription: Subscription; 
  
  constructor(private toDoListService: ToDoListService ) { }

  ngOnInit() {
    this.getListItems();

    this.subscription = this.toDoListService.ingredientsChanged.subscribe(
      (list: ToDo[]) => {
        this.getListItems();
      }
    )
  }

  getListItems() {
    this.shoppingList = this.toDoListService.getShoppingList();
    this.packingList = this.toDoListService.getPackingList();
    this.bookingList = this.toDoListService.getBookingList();
    this.otherList = this.toDoListService.getOtherList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
