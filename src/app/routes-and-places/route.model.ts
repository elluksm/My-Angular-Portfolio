import { Point } from "./point.model"

  export class Route {
    constructor(public id: number, public name: string, public description: string, public points: Point[]) {}
 }