import ModCharacter from './ModCharacter';

export default class Daemon extends ModCharacter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
