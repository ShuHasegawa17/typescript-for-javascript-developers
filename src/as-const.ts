export {};

let name = 'SHU';
name = 'Hase';

let nickname = 'SH' as const; // SH型となる
//nickname = 'SHUTAROU'; NG
nickname = 'SH'; // OK

let profile = {
  name: 'SHU',
  height: 176,
} as const;

// profile.name = 'shu';
// profile.height = 180;
