class Vehicle {
  #name;
  #wheel;
  #speed;

  constructor(name, wheel, speed, color) {
    this.#name = name;
    this.#wheel = wheel;
    this.#speed = speed;
    this.color = color;
  }
}

module.exports = Vehicle;
