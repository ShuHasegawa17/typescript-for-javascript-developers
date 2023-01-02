export {};

// シグネチャ
function double(value: number): number;
function double(value: string): string;
// シグネチャがある場合、実装側はanyでよい。（型制約は働く）
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('GO '));
// anyだが、シグネチャが効いてるのでコンパイルエラー
//console.log(double(true));
