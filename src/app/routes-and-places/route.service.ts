import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Route } from './route.model';
import { PLACES } from './mock-places';
import { ROUTES } from './mock-routes';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  getPlaces(): Observable<Route[]> {
    return of(PLACES);
  }

  getRoutes(): Observable<Route[]> {
    return of(ROUTES);
  }

  getRoute (id: number): Observable<Route> {
    return of(ROUTES.find(route => route.id === id));
  }
}
