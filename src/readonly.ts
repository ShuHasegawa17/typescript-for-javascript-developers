export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('SHU');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'hasegawa';
