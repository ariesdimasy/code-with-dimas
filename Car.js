const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  #name;
  #wheel;

  // method bawaan dari class, dijalankan saat object dari class tersebut terbentuk
  constructor(name, wheel, machine, speed, color) {
    super(name, wheel, speed, color); // constructor dari class Parent
    this.machine = machine; // atribute punya class Car sendiri
  }

  set setName(name) {
    this.#name = name; // assign value baru, si atrribut name ini akan memiliki value baru
  }

  get getName() {
    return this.#name;
  }

  set setWheel(w) {
    this.#wheel = w; // assign value baru, si atrribut name ini akan memiliki value baru
  }

  get getWheel() {
    return this.#wheel;
  }

  set setSpeed(s) {
    this.speed = s; // assign value baru, si atrribut name ini akan memiliki value baru
  }

  get getSpeed() {
    return this.speed;
  }

  // method
  run() {
    console.log("this car run at speed ", this.speed);
  }

  jump() {
    console.log("this car run can jump ");
  }

  #privateMethod() {
    console.log("this is private method");
  }

  publicMethod() {
    console.log("this is public method");
    this.#privateMethod();
  }
}

module.exports = Car;
