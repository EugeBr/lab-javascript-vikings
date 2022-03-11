// Soldier
//*should receive 2 arguments (health & strength)
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  };
  attack(){
   return this.strength;
  };
  receiveDamage(damage){ //*should remove the received damage from the health property
    this.health -= damage;
  };//!No return
};

// Viking //*should inherit from Soldier
class Viking extends Soldier {
  constructor (name, health, strength){
    super (health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`; //*if the Viking is still alive
    }
    else{
      return `${this.name} has died in act of combat`;//*if dead 
    };
  };
  battleCry(){
    return "Odin Owns You All!";
  };
};

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
  super (health, strength);
  };
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`; 
    }
    else{
      return `A Saxon has died in combat`;
    };
  };
};


// War //* 0 arguments
//*should assign an empty array to the vikingArmy property
class War { 
 constructor () {
 this.vikingArmy = [];
 this.saxonArmy = [];
 };

addViking(vikingObj) {
  this.vikingArmy.push(vikingObj);
};

addSaxon(saxonObj) {
  this.saxonArmy.push(saxonObj);
};


vikingAttack() {
const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
const resultVikingAttack = randomSaxon.receiveDamage(randomViking.strength);
const saxonIndex = this.saxonArmy.indexOf(randomSaxon);
if (randomSaxon.health <= 0) {
  this.saxonArmy.splice(saxonIndex, 1);
};
return resultVikingAttack;
};

saxonAttack() {
const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
const resultSaxonAttack = randomViking.receiveDamage(randomSaxon.strength);
const vikingIndex = this.vikingArmy.indexOf(randomViking);
if (randomViking.health <= 0) {
  this.vikingArmy.splice(vikingIndex, 1);
};
return resultSaxonAttack;
};

showStatus() {
  if (!this.saxonArmy.length) {
    return "Vikings have won the war of the century!";
  }
  else if (!this.vikingArmy.length) {
    return "Saxons have fought for their lives and survived another day...";
  }
  else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};

};



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
