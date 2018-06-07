import { Component, OnInit } from '@angular/core';
import { Route } from '../route.model';
import { RouteService } from '../route.service';


@Component({
  selector: 'app-my-routes',
  templateUrl: './my-routes.component.html',
  styleUrls: ['./my-routes.component.scss']
})
export class MyRoutesComponent implements OnInit {

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

