import Magician from '../magician';

test('class Magician default test', () => {
  expect(new Magician('Magician', 'Magician')).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: NaN,
    defence: 40,
    baseAttack: 100,
  });
});

test('class Magician levelUp test', () => {
  const character = new Magician('Magician', 'Magician');
  character.levelUp();
  expect(character).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 2,
    _attack: NaN,
    defence: 48,
    baseAttack: 100,
  });
});

test('class Magician levelUp error test', () => {
  const character = new Magician('Magician', 'Magician');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Magician damage test', () => {
  const character = new Magician('Magician', 'Magician');
  character.damage(5);
  expect(character).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 97,
    level: 1,
    _attack: NaN,
    defence: 40,
    baseAttack: 100,
  });
});

test('class Magician damage test', () => {
  const character = new Magician('Magician', 'Magician');
  character.damage(250);
  expect(character).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 0,
    level: 1,
    _attack: NaN,
    defence: 40,
    baseAttack: 100,
  });
});

test('class Magician set attack test', () => {
  const character = new Magician('Magician', 'Magician');
  character.attack = 2;
  expect(character.attack).toBe(90);
});

test('class Magician set attack test', () => {
  const character = new Magician('Magician', 'Magician');
  character.stoned = true;
  character.attack = 2;
  expect(character.attack).toBe(85);
});
