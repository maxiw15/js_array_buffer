import Daemon from '../Daemon';
import Magician from '../Magician';

test('Проверка создания персонажа с новым функционалом', () => {
  const char1 = new Daemon('Daem1');
  const expected = {
    name: 'Daem1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    distance: 1,
    stoned: false,
  };
  expect(char1).toEqual(expected);
});

test('Проверка зависимости силы атаки от расстояния', () => {
  const char1 = new Magician('Magic1');
  char1.valAttack = 2;
  const expected = {
    name: 'Magic1',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 9,
    defence: 40,
    distance: 2,
    stoned: false,
  };
  expect(char1).toEqual(expected);
});

test('Проверка зависимости силы атаки от расстояния и заклинания', () => {
  const char1 = new Magician('Magic1');
  char1.valStoned = true;
  char1.valAttack = 2;
  const recive = char1.valAttack;

  expect(recive).toBe(4);
});

test('Вывод свойства stoned', () => {
  const char1 = new Magician('Magic1');
  char1.valStoned = true;
  expect(char1.valStoned).toBe(true);
});
