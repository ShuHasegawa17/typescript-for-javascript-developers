export {};

interface Profile {
  underTwenty: boolean; // 必須パラメータは定義する
  [index: string]: string | number | boolean;
}
// 必須パラメータは初期化必須
let profile: Profile = { underTwenty: false };
profile.name = 'HAM';
profile.age = 43;
profile.nationality = 'JAPAN';
