export {};
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test'); // 呼び元に戻らないのでresultに値は入らない
  console.log({ result }); // 到達しない
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only'); //値を代入できない
