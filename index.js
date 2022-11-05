// kenapa ada function ?
// nilai akhirnya adalah void
function welcome(name, times) {
  for (var i = 0; i < times; i++) {
    console.log("selamat datang , ", name);
  }
}

console.log(welcome("dimas", 5));

// function memiliki nilai akhir / hasil akhir
function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function main() {
  var adding = add(5, 7);
  var dividing = divide(10, 2);

  return adding + dividing;
}

const run = () => "running arrow";

const walk = function () {
  console.log("walk");

  const test = () => {
    console.log("test my walk");
  };

  test();
};

var hasil = add(5, 6); // 11

console.log(run());
walk();

console.log(main());

// function ==> factory ( pabrik )
// mengolah bahan mentah ( parameter ) ===> barang jadi ( hasil / nilai akhir )
