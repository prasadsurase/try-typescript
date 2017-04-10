// Demo arrow function


export class Person {
  constructor(public age: number) {
    this.age = age;
  }

  growOld = () => {
    this.age ++;
  }
}

var p = new Person(10)
console.log('Age: '+ p.age);
console.log('Growig old...');
p.growOld();
console.log('Age: '+ p.age);
