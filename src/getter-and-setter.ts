export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `sercretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('shu', 1234567890);
// card.owner = 'test'
console.log(card.owner);
card.secretNumber = 99999999;
console.log(card.debugPrint());
console.log(card.secretNumber); // undefined
console.log(card);
// card._secretNumber
