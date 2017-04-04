"use strict";
exports.__esModule = true;
var Point2D = (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.add = function (point) {
        return new Point2D(this.x + point.x, this.y + point.y);
    };
    return Point2D;
}());
exports.Point2D = Point2D;
var p1 = new Point2D(0, 10);
var p2 = new Point2D(10, 20);
var p3 = p1.add(p2);
console.log('----');
console.log(p1);
console.log(p2);
console.log('----');
console.log(p3);
