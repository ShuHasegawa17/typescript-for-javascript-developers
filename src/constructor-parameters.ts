export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// 対象の型定義をtypeofでまずは取得
type PersonType = typeof Person;
// コンストラクタの型定義を取得
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['SHU', 37];
const shu = new Person(...profile);

//定義
//　Tはnewするもの　→　クラスであること
//　infer P のコンストラクタ引数を三項演算子で返す
type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
