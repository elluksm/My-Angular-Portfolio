import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../route.model';

@Component({
  selector: 'app-route-item',
  templateUrl: './route-item.component.html',
  styleUrls: ['./route-item.component.scss']
})
export class RouteItemComponent implements OnInit {
  @Input () route: Route;
  constructor() { }

  ngOnInit() {
  }

}
