export {};

// const reducer = (accumulator: number, currentValue: number) => {
//   console.log({ accumulator, currentValue });
//   return accumulator + currentValue;
// };
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce((accumrator: number, currentValue: number) => {
    console.log({ accumrator, currentValue });

    return accumrator + currentValue;
  });
};

console.log(sum(1, 2, 3, 4, 5));
