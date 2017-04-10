// Using arrow/fat function when using inheritance


export class Adder {
  constructor(public a: number) {}

  add = (b: string): string => {
    return this.a + b;
  }
}

var a = new Adder(10);
console.log(a.add('prasad'));
