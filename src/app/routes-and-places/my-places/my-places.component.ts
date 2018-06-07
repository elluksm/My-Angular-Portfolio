import { Component, OnInit } from '@angular/core';
import { Route } from '../route.model';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {
  routes: Route[] =  [];
  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes(): void {
    this.routeService.getRoutes()
        .subscribe(routes => this.routes = routes);
  }

}
