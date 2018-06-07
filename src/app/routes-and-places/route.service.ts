import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Route } from './route.model';
import { ROUTES } from './mock-routes';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  getRoutes(): Observable<Route[]> {
    return of(ROUTES);
  }
}
