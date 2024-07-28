import Swordsman from '../swordsman';

test('class Swordsman default test', () => {
  expect(new Swordsman('Swordsman', 'Swordsman')).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('class Swordsman params test', () => {
  expect(new Swordsman('Swordsman', 'Swordsman')).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('class Swordsman levelUp test', () => {
  const character = new Swordsman('Swordsman', 'Swordsman');
  character.levelUp();
  expect(character).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test('class Swordsman levelUp error test', () => {
  const character = new Swordsman('Swordsman', 'Swordsman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Swordsman damage test', () => {
  const character = new Swordsman('Swordsman', 'Swordsman');
  character.damage(5);
  expect(character).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 95.5,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('class Swordsman damage test', () => {
  const character = new Swordsman('Swordsman', 'Swordsman');
  character.damage(200);
  expect(character).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
