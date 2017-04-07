import { Base } from "./base.js"

class Child extends Base {
  log(){
    console.log('This is child log');
    super.log();
  }
}

var c = new Child();
c.log();
