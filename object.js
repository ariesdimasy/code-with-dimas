// object literal
var person = {
  name: "Aries Dimas",
  married: true,
  hobbies: ["gaming", "internet", "code"],
  person: "yes",
  walk() {
    console.log(this.name, " iam walking");
  },
  address: {
    home1: "Amanda cluster",
    office: "Green Park BSD",
    damn: {
      again: {},
    },
  },
};

console.log(person);
