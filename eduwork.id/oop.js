class Geometry {
  // function /  method / aksi yang dijalankan pertama kali saat object dibuat
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  swing() {
    console.log(this.name + " swing");
  }
}

// sisi sama semua
class Rectangel extends Geometry {
  constructor(name, color, side) {
    super(name, color);
    this.side = side;
  }
  wide() {
    return this.side * this.side;
  }
}

// 2 sisi w , 2 sisi h
class Rectangular extends Geometry {}

// radius
class Circle extends Geometry {}

const rec1 = new Rectangel("rec1", "red", 10);
rec1.sayHello = function () {
  console.log("hello world");
};
console.log(rec1);
console.log(rec1.wide());
rec1.swing();
rec1.sayHello();
