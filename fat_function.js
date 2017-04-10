function Person(age) {
    this.age = age;
    this.growOld = function () {
        console.log(this);
        this.age++;
    };
}
var person = new Person(10);
console.log(person.age);
setTimeout(person.growOld, 1000);
console.log(person.age);
setTimeout(function () {
    console.log(person.age);
    console.log(person);
}, 2000);
console.log(person.age);
console.log('------------');
var User = (function () {
    function User(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            console.log(_this);
            _this.age++;
        };
    }
    return User;
}());
var user = new User(10);
console.log(user.age);
setTimeout(user.growOld, 10000);
console.log(user.age);
setTimeout(function () {
    console.log(user.age);
    console.log(user);
}, 20000);
console.log(user.age);
debugger;
