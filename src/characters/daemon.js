import Character from '../character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);

    this.baseAttack = 100;
    this.defence = 40;
  }

  get attack() {
    return this._attack;
  }

  set attack(distance) {
    let result = this.baseAttack - (10 * (distance - 1));
    if (this.stoned) {
      result -= Math.log2(distance) * 5;
    }
    this._attack = result;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }
}

const a = new Daemon('Daemon', 'Daemon');
