import { Component, OnInit,ViewChild } from '@angular/core';
import { Route } from '../route.model';
import { RouteService } from "../route.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.scss']
})
export class RouteMapComponent implements OnInit {
  route: Route;
  id: number;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private routeService: RouteService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.actRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getRoute(this.id);
      }
    )

    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 2,
      minZoom: 2
    });
}
  

  getRoute(id: number): void {
    this.routeService.getRoute(id)
      .subscribe(route => this.route = route);
  }


}
