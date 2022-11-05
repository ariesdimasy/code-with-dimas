const Car = require("./Car");
const Bicycle = require("./Bicycle");

var mycar = new Car("Turbo Furious", 4, "1000 CC", 160, "green"); // membuat object
var yourcar = new Car("Autonomous Fury", 4, "1600 CC", 200, "red");

var myb = new Bicycle("Ogun", 2, 30, "black");

console.log(mycar);
console.log(mycar.color);

console.log(myb);
