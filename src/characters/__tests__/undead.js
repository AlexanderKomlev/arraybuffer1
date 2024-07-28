import Undead from '../undead';

test('class Undead default test', () => {
  expect(new Undead('Undead', 'Undead')).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Undead params test', () => {
  expect(new Undead('Undead', 'Undead')).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Undead levelUp test', () => {
  const character = new Undead('Undead', 'Undead');
  character.levelUp();
  expect(character).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('class Undead levelUp error test', () => {
  const character = new Undead('Undead', 'Undead');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Undead damage test', () => {
  const character = new Undead('Undead', 'Undead');
  character.damage(5);
  expect(character).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 96.25,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('class Undead damage test', () => {
  const character = new Undead('Undead', 'Undead');
  character.damage(150);
  expect(character).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
