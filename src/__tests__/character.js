import Character from '../character';

test('class Character name error test', () => {
  expect(() => new Character('Z', 'Zombie')).toThrow(new Error('Имя персонажа должно быть от 2 до 10 символов'));
});

test('class Character type error test', () => {
  expect(() => new Character('Zombie', 'Z')).toThrow(new Error('Тип персонажа должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'));
});

test('class Character params test', () => {
  expect(new Character('Zombie', 'Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});
