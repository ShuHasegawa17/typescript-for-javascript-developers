export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'SHU';
  static lastName: string = 'Hasegawa';

  static Work() {
    return `Hey, guys! This is ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.Work());
