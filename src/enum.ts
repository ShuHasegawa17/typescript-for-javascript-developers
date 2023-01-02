export {};

enum Months {
  //デフォルト0連番だが、最初の数値に代入すればその数からの連番になる。
  January = 1,
  February,
  March,
  April,
}
console.log(Months.January);
console.log(Months.April);

enum COLORS {
  // 文字列は連番にならないので、すべて値を設定する。
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}
let green = COLORS.GREEN;
console.log({ green });

// enumへの追加
enum COLORS {
  YELLOW = '#FFF00',
}
console.log(COLORS.YELLOW);
