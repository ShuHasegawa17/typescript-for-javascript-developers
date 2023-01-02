export {};

const nextYearSalaly = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalaly(1000));
