export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto'];

let strings: string[] = ['Typescript', 'Javasript', 'CoffeeScript'];

let nijingenHairetu: number[][] = [
  [50, 100],
  [150, 300],
];

let hairetu: (number | string | boolean)[] = [1, false, 'Japan'];

type Test = {
  a: {
    a1?: number;
    a2: number;
  };
  b?: {
    b1?: number;
    b2: number;
  };
};
let test: Test = {
  a: {
    a2: 100,
  },
};

console.log('test', test.b?.b1);
