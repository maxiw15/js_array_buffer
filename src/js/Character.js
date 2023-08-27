export default class Character {
  static typeCharacter = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    this.name = name;
    if ((this.name).length < 2 || (this.name).length > 10) {
      throw new Error('Length name error');
    } else if (typeof (this.name) !== 'string') {
      throw new Error('Name is not string');
    }
    this.type = type;
    if (!Character.typeCharacter.includes(this.type)) {
      throw new Error('This type does not exist');
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Cannot damage');
    }
  }
//
}
