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
  bounds: google.maps.LatLngBounds;

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
        this.getRoute(this.id);
      }
    )
    
  }

  getRoute(id: number): void {
    this.routeService.getRoute(id)
      .subscribe(route => {
        this.route = route;
        this.showRoute ();
      })  
  };


 showRoute () {

  //var marker = new google.maps.Marker({position: {lat: -25.344, lng: 131.036}, map: this.map});

  var routePoint = {lat: -25.344, lng: 121.036};
 //create pushpin (new Marker for each pin) on the map
  var marker = new google.maps.Marker({
    position: routePoint,
    map: this.map
});

var routePoint = {lat: -15.344, lng: 15.036};
//create pushpin (new Marker for each pin) on the map
 var marker = new google.maps.Marker({
   position: routePoint,
   map: this.map
});
  
}

}


 //currentlyOpenedRouteID: any = null;
//   //create new empty infowindow
//   var infowindow = null;
//   var infowindow = new google.maps.InfoWindow({
//       content: ''
//   });

//   //
//   var routePath = []; //array of coordinates
//   var currentMarkers = [];
//   if (window.allMarkers){
//       //Clear all markers;

//       for (var i = 0; i < window.allMarkers.length; i++) {
//           window.allMarkers[i].setMap(null);
//       }
//       markers = [];
//   }

//   var currentlyOpened = null;

//   //Clear previous lines
//   if (window.routeLines){
//       window.routeLines.setMap(null);
//   }

//   //go through all pins for selected route/individual points
//   for (var i = 0; i < pinArray.length; i++) {

//       var pin = pinArray[i]

//       var lat = parseFloat(pin.lat);
//       var lon = parseFloat(pin.lon);
//       var description = pin.description;
//       var title = pin.title;
//       var write_time = moment.unix(pin.write_time).format("YYYY/MM/DD HH:mm:ss");

//       var routePoint = {lat: lat, lng: lon};
//       routePath.push(routePoint);

//       if (title) {
//           //create pushpin (new Marker for each pin) on the map
//           var marker = new google.maps.Marker({
//               position: routePoint,
//               map: this.map
//           });

//           currentMarkers.push(marker);



//       // HTML for Pin InfoWindow
//       var content = "<div data-pin-id="+pin.id+">" +
//           '<div><span class = "pinComment">Title: </span><span class = "pinCommentTitle">' + title + '</span></div>' +
//           '<div ondblclick="editPinDesc(this, \'description\')"><span class = "pinComment">Description: </span><span class = "pinCommentDescription">' + description + '</span></div>' +
//           '<div><span class = "pinComment">Write time: </span>' + write_time + '</div>' +
//           "<button name = 'edit' data-pin-id="+pin.id+" class='editBtn commentBtn' onClick=editPin(this)>Edit Pin</button>" +
//           "<button data-pin-id="+pin.id+" data-route-id="+routeId+" class='delBtn commentBtn' onClick=deletePin(this)>Delete Pin</button>" +
//           "</div>";

//       var infowindow = new google.maps.InfoWindow();

//       //add event listener for each marker to display InfoWindow when clicked
//       google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
//           return function() {
//               if (currentlyOpened)
//               {
//                   currentlyOpened.close();
//               }
//               infowindow.setContent(content);
//               infowindow.open(map,marker);
//               currentlyOpened = infowindow;
//           };
//       }(marker,content,infowindow)));



//       //Event listener for Menu comments (when you click, a new InfoWindow for that pin opens)
//       createCommentInfo = function(pin, comment, infowindow, marker, content){
//           return function(){
//               if (currentlyOpened)
//               {
//                   currentlyOpened.close();
//               }

//               //var currentRef = $.extend({},content);
//               var currentRef = content + '';
//               infowindow.setContent(currentRef);
//               infowindow.open(map,marker);
//               console.log(title, description, i, pinArray[i], pin);
//               currentlyOpened = infowindow;
//           }
//       };

//       //create comment for each pin with pin title (to display in menu under clicked route)
//       var comment = $('<a href="#" pin-id="'+pin.id+'" class="singleComment"> # ' + pin.title + '</a><br>');
//       comment.click(createCommentInfo(pin, comment, infowindow, marker, content)); //add event listener
//       commentContainer.append(comment);
//   };
//   }

//   //path for drawing lines between pushpins
//   window.allMarkers = currentMarkers;
//   routeLines = new google.maps.Polyline({
//       path: routePath,
//       strokeColor: '#872e61',
//       strokeOpacity: 1.0,
//       strokeWeight: 2
//   });

//   //if it is a route (not individual points), draw line between pushpins
//   if (connectPoints) {
//       routeLines.setMap(map);
//       window.routeLines = routeLines;
//   }

//   //zoom map around pushpins
//   var markers = [];
//   var bounds = new google.maps.LatLngBounds();
//   for (var i = 0; i < currentMarkers.length; i++) {
//       bounds.extend(allMarkers[i].getPosition());
//   }
//   map.fitBounds(bounds);
// }
