export {};

type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: 'SHU',
  age: 37,
};
me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
const you: PersonalDataType = {
  name: 'Taro',
  age: 35,
};

type MyReadType<T> = { readonly [P in keyof T]: T[P] };
type test = MyReadType<Profile>;
