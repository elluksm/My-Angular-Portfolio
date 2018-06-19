import { Component, OnInit,ViewChild } from '@angular/core';
import { Route } from '../route.model';
import { RouteService } from "../route.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import {} from '@types/googlemaps';

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
  markers: google.maps.Marker[];
  routePath: any[];

  constructor(private routeService: RouteService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 2,
      minZoom: 2
    });

    this.actRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        var url = this.router.url;
        var idCategory;
        if (url.includes("myPlaces")) {
          idCategory = 1;
        } else {
          idCategory = 2;
        }
        this.getRoute(this.id, idCategory);
      }
    )
    
  }

  getRoute(id: number, idCategory: number): void {
    this.routeService.getRoute(id, idCategory)
      .subscribe(route => {
        this.route = route;
        this.showRoute (idCategory);
      })  
  };


 showRoute (idCategory: number) {
   if(this.markers) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
   }
  
  this.markers = [];
  this.routePath = [];
  var currentlyOpened = null;
  for (var i = 0; i < this.route.points.length; i++) {
    var point = this.route.points[i];
    var routePoint = {lat: point.lat, lng: point.lon};
    this.routePath.push(routePoint);
    var marker = new google.maps.Marker({
      position: routePoint,
      map: this.map
  });
  this.markers.push(marker);

  // HTML for Pin InfoWindow
var content = "<div>" +
'<div><b>Title: </b>' + point.name + '</div>' +
'<div><b>Description: </b>' + point.description + '</div>' +
'<div><img src = "' + point.imagePath + '" style="max-height:100px;"> </div>' +
"</div>";

var infowindow = new google.maps.InfoWindow();

//add event listener for each marker to display InfoWindow when clicked
google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
return function() {
    if (currentlyOpened)
    {
        currentlyOpened.close();
    }
    infowindow.setContent(content);
    infowindow.open(this.map,marker);
    currentlyOpened = infowindow;
};
}(marker,content,infowindow)));
  }

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < this.markers.length; i++) {
   bounds.extend(this.markers[i].getPosition());
  }
  this.map.fitBounds(bounds);

  if (idCategory == 2) {
    var flightPath = new google.maps.Polyline({
      path: this.routePath,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
  
    flightPath.setMap(this.map);
  }

    }

  
  }




