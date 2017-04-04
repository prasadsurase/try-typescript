export class Point2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point2D){
    return new Point2D(this.x + point.x, this.y + point.y);
  }
}

var p1 = new Point2D(0, 10);
var p2 = new Point2D(10, 20);
var p3 = p1.add(p2);
console.log('----');
console.log(p1);
console.log(p2);
console.log('----');
console.log(p3);
