import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToDo } from "../to-do.model"
import { ToDoListService } from "../to-do-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit {
  @Input () name: String;
  @Input () amount: boolean;
  @Input () list: any[];
  @Input () listIndex: number;


  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {

    }

onEditItem (id: number) {
  this.toDoListService.startedEditing.next(id);
}

}
