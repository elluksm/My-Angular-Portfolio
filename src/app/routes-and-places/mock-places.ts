import { Route } from './route.model';
import { Point } from './point.model';

export const PLACES: Route[] = [
  new Route (1, 'Some nice places', "", [
    new Point (1, "Dabas parks Pape", "", "", 56.1679204, 20.7750403),
    new Point (2, "Ķemeru nacionālais parks", "", "", 56.8840744, 23.4117321),
    new Point (3, "Ventas rumba", "", "", 56.9682394, 21.9769346)
  ]),
  new Route (2, 'Best cafes', "", [
    new Point (1, "Kuuka Kafe", "", "", 56.947138, 24.1079584),
    new Point (2, "Naples", "Fantastic view and delicious food", "", 56.9658296, 24.0933013),
    new Point (3, "Costa Coffee", "Best coffee", "", 56.95491, 24.121608)
  ]),
  new Route (3, 'Best beaches', "", [
    new Point (1, "Carnikava", "", "", 57.1674371, 24.3004921),
    new Point (2, "Liepāja", "", "", 56.5003605, 20.9983425),
  ]),

];