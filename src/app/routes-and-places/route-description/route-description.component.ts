import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../route.model';

@Component({
  selector: 'app-route-description',
  templateUrl: './route-description.component.html',
  styleUrls: ['./route-description.component.scss']
})
export class RouteDescriptionComponent implements OnInit {
  @Input () route: Route;

  constructor() { }

  ngOnInit() {
  }

}
