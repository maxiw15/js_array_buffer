import Character from './Character';

const damageDistance = {
  1: 1,
  2: 0.9,
  3: 0.8,
  4: 0.7,
  5: 0.6,
};

export default class ModCharacter extends Character {
  constructor(name, type, attack, defence, health, level) {
    super(name, type, attack, defence, health, level);
    this.distance = 1;
    this.stoned = false;
  }

  set valAttack(val) {
    this.distance = val;
    this.attack *= damageDistance[this.distance];
  }

  get valAttack() {
    if (this.stoned === true) {
      this.attack -= Math.log2(this.distance) * 5;
    }
    return this.attack;
  }

  set valStoned(val) {
    this.stoned = val;
  }

  get valStoned() {
    return this.stoned;
  }
}
