var name = "Dimas"; // string , array, object , boolean, number
// semua tipe data dianggap object oleh JS

String.prototype.myOwnFunction = function () {
  for (var i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};

String.prototype.myReverse = function () {
  var res = "";
  for (var i = name.length - 1; i >= 0; i--) {
    res += name[i];
  }
  return res;
};

name.myOwnFunction();
console.log(name.myReverse());
