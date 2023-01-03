export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ['Gloria', 56];
debugProfile(...profile);

//　Parametersの定義
//　①MyParameters＜T＞　Tは関数であること
//　②関数の引数を返す。（inferの総称型P）
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
