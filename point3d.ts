/// <reference path="point2d.ts"/>
import { Point2D } from "./point2d.js"

class Point3D extends Point2D {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(point: Point3D) {
    var point2D = super.add(point);
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}

var p1 = new Point2D(0, 1);
var p2 = new Point2D(1, 2);
var p = p2.add(p1);

console.log('----');
console.log(p1);
console.log(p2);
console.log('----');
console.log(p);
