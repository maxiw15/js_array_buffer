import Bowman from '../Bowman';

describe('Tests class Bowman', () => {
  it('create object Bowman', () => {
    const b1 = new Bowman('Bow');
    const res = {
      name: 'Bow',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(b1).toEqual(res);
  });

  it('create object with short name', () => {
    try {
      const jon = new Bowman('B');
      const res = {
        name: 'B',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Length name error');
    }
  });

  it('create object with not string name', () => {
    try {
      const jon = new Bowman(12);
      const res = {
        name: 12,
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Name is not string');
    }
  });

  it('create object with unsupported type', () => {
    try {
      const jon = new Bowman('Bow', 'Wolf');
      const res = {
        name: 'Bow',
        type: 'Wolf',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
      expect(jon).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('This type does not exist');
    }
  });

  it('Testing level up', () => {
    const person = new Bowman('Bo');
    person.health = 80;
    person.levelUp();
    const res = {
      name: 'Bo',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    };
    expect(person).toEqual(res);
  });

  it('Testing cannot level up', () => {
    try {
      const person = new Bowman('Bo');
      person.health = 0;
      person.levelUp();
      const res = {
        name: 'Bo',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
      };
      expect(person).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Cannot level up a dead character');
    }
  });

  it('Testing damage if health > 0', () => {
    const person = new Bowman('Bo');
    person.damage(10);
    const res = {
      name: 'Bo',
      type: 'Bowman',
      health: 92.5,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(person).toEqual(res);
  });

  it('Testing damage if health = 0', () => {
    try {
      const person = new Bowman('Bo');
      person.health = 0;
      person.damage(10);
      const res = {
        name: 'Bo',
        type: 'Bowman',
        health: 92.5,
        level: 1,
        attack: 20,
        defence: 20,
      };
      expect(person).toEqual(res);
    } catch (e) {
      expect(e.message).toBe('Cannot damage');
    }
  });
});
