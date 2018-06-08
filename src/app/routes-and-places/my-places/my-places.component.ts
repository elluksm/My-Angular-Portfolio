import { Component, OnInit } from '@angular/core';
import { Route } from '../route.model';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss']
})
export class MyPlacesComponent implements OnInit {
  places: Route[] =  [];
  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.routeService.getPlaces()
        .subscribe(places => this.places = places);
  }

}
