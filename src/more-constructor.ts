export {};

class Person {
  // コンストラクタ引数にアクセス修飾子をつけると、初期化の記載を省略できる
  constructor(public name: string, protected age: number) {}
  profile(): string {
    // 初期化済みのため、thisでアクセスできる
    return `name: ${this.name}, age: ${this.age}`;
  }
}

const me = new Person('SHU', 37);
console.log(me);
