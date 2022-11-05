const Vehicle = require("./Vehicle");

class Bicycle extends Vehicle {
  constructor(name, wheel, speed, color) {
    super(name, wheel, speed, color);
  }

  run() {
    console.log("can run at speed ", this.speed);
  }
}

module.exports = Bicycle;
