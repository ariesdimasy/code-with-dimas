const Car = require("./Car");

var myCar = new Car("Turbo", 4, 1200, 80, "green");

console.log(myCar);

myCar.setName = "Turbo Pascal 2000";
myCar.setWheel = 10;

console.log(myCar.getWheel);

myCar.publicMethod();

console.log({ foo: "bar" });
