import Bowman from '../bowman';

test('class Bowman default test', () => {
  expect(new Bowman('Bowman', 'Bowman')).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Bowman params test', () => {
  expect(new Bowman('Bowman', 'Bowman')).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Bowman levelUp test', () => {
  const character = new Bowman('Bowman', 'Bowman');
  character.levelUp();
  expect(character).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('class Bowman levelUp error test', () => {
  const character = new Bowman('Bowman', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Bowman damage test', () => {
  const character = new Bowman('Bowman', 'Bowman');
  character.damage(5);
  expect(character).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 96.25,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Bowman damage test', () => {
  const character = new Bowman('Bowman', 'Bowman');
  character.damage(150);
  expect(character).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
