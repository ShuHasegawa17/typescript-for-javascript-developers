export {}

type Mojiretu = string
const fooMoji: Mojiretu = 'Hello';

const exapmle1 = {
  name: 'Hase',
  age: 37
}

const exapmle2:Profile = {
  name: 'Hase',
  age: 37
}

type Profile =  {
  name: string;
  age: number;
}

type Profile2 = typeof exapmle1
