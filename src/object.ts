export {};

let profile1: object = { name: 'hase' };
profile1 = { birthYear: 10 };

console.log({ profile1 });

let profile2: { name: string } = { name: 'hase' };
//profile2 = {birthYear:20}
profile2 = { name: 'gawa' };
