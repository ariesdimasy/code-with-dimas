// object literal , dia object yang dibuat bukan dari class

const obj = {
  name: "rectangel 1",
  side: 4,
  color: "green",
  swing: function () {
    console.log(this.name + " is swing");
  },
};

obj.swing();

const obj2 = {
  name: "rectangel 2",
  side: 4,
  color: "red",
  swing: function () {
    console.log(this.name + " is swing");
  },
};

obj2.swing();
