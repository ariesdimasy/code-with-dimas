class Character {
  constructor(name) {
    this.name = name;
  }
}

class Hero extends Character {
  #attack;
  #defense;
  #blood;

  constructor(name, attack, defense, blood) {
    super(name);
    this.#attack = attack; // property
    this.#defense = defense;
    this.#blood = blood;
  }

  set setAttack(attack) {
    this.#attack = attack;
  }

  get attack() {
    return this.#attack;
  }

  set setDefense(def) {
    this.#defense = def;
  }

  get defense() {
    return this.#defense;
  }

  set setBlood(blood) {
    this.#blood = blood;
  }

  get blood() {
    return this.#blood;
  }

  attackAction(hero) {
    hero.setBlood = hero.blood + hero.defense - this.#attack;
  }
}

class Arena {
  static otherName = "Default Arena";

  constructor(name) {
    this.arenaName = name;
  }

  // tidak bisa mengkses nilai dari property object
  static myMethod() {
    console.log(this.otherName);
  }

  static fight(hero1, hero2) {
    console.log(hero1);

    hero1.attackAction(hero2);
    hero2.attackAction(hero1);

    console.log("hero1 => ", hero1, hero1.blood);
    console.log("hero2 => ", hero2, hero2.blood);

    hero1.attackAction(hero2);
    hero2.attackAction(hero1);

    console.log("hero1 => ", hero1, hero1.blood);
    console.log("hero2 => ", hero2, hero2.blood);
  }
}

var heroAB = new Hero("Alucard", 1000, 800, 4000);
var heroCD = new Hero("Balrog", 1200, 900, 5000);

var arena = new Arena("Hellfire");
console.log(arena);

Arena.fight(heroAB, heroCD);
Arena.myMethod();

/*
    class ClassName { 
        - property 
        - method 
        - punya nya object dari className 

        - property 
        - method 
        - punya nya si class 
    }

*/
