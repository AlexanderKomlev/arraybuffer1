import Daemon from '../daemon';

test('class Daemon default test', () => {
  expect(new Daemon('Daemon', 'Daemon')).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: NaN,
    defence: 40,
    baseAttack: 100,
  });
});

test('class Daemon levelUp test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.levelUp();
  expect(character).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 2,
    _attack: NaN,
    defence: 48,
    baseAttack: 100,
  });
});

test('class Daemon levelUp error test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.health = 0;
  expect(() => character.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('class Daemon damage test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.damage(5);
  expect(character).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 97,
    level: 1,
    _attack: NaN,
    defence: 40,
    baseAttack: 100,
  });
});

test('class Daemon damage test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.damage(250);
  expect(character).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 0,
    level: 1,
    _attack: NaN,
    defence: 40,
    baseAttack: 100,
  });
});

test('class Daemon set attack test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.attack = 2;
  expect(character.attack).toBe(90);
});

test('class Daemon set attack test', () => {
  const character = new Daemon('Daemon', 'Daemon');
  character.stoned = true;
  character.attack = 2;
  expect(character.attack).toBe(85);
});
