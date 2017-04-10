"use strict";
// Using arrow/fat function when using inheritance
exports.__esModule = true;
var Adder = (function () {
    function Adder(a) {
        var _this = this;
        this.a = a;
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
exports.Adder = Adder;
var a = new Adder(10);
console.log(a.add('prasad'));
