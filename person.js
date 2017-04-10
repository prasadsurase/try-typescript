"use strict";
// Demo arrow function
exports.__esModule = true;
var Person = (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
var p = new Person(10);
console.log('Age: ' + p.age);
console.log('Growig old...');
p.growOld();
console.log('Age: ' + p.age);
