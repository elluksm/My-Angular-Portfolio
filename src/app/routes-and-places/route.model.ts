import { Point } from "./point.model"

  export class Route {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public points: Point[];
 }