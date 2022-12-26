export {};
let profile: [string, number] = ['Ham', 43]; // tuple => stringとnumberの順序と個数を定義。
let profiles:[string,number][] = [
  ['SHU',37],
  ['CHISA',4],
]
//let profile: (string, number)[] = ['Ham', 43]; // ユニオン配列だと、型の順序や個数等が自由なので、以下がすべてOKとなる。
//profile = [43, 'Ham'];
// profile = [43, 43];
// profile = ['Ham', 'Ham', 'Ham'];
