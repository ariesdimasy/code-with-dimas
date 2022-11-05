function generateStar(num) {
  // nested looping
  for (var i = 0; i < num; i++) {
    var row = "";
    for (var j = 0; j < num; j++) {
      if (j < num - 1 - i) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }
    console.log(row);
  }
}

generateStar(5);
//0 1 2 3 4
//_ _ _ _ * 0
//_ _ _ * * 1
//_ _ * * * 2
//_ * * * * 3
//* * * * * 4

generateStar(4);
//_ _ _ *
//_ _ * *
//_ * * *
//* * * *
