import Zombie from '../zombie';

test('class Zombie default test', () => {
  expect(new Zombie('Zombie', 'Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Zombie params test', () => {
  expect(new Zombie('Zombie', 'Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Zombie levelUp test', () => {
  const character = new Zombie('Zombie', 'Zombie');
  character.levelUp();
  expect(character).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('class Zombie levelUp error test', () => {
  const character = new Zombie('Zombie', 'Zombie');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Zombie damage test', () => {
  const character = new Zombie('Zombie', 'Zombie');
  character.damage(5);
  expect(character).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 97,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('class Zombie damage test', () => {
  const character = new Zombie('Zombie', 'Zombie');
  character.damage(250);
  expect(character).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
