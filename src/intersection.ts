export {};

type Pitcher1 = {
  throwingSped: number;
};
type Better1 = {
  battingAverage: number;
};

const sasaki: Pitcher1 = {
  throwingSped: 154,
};

const Ochiai: Better1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSped: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Better1;

const Ootani: TwoWayPlayer = {
  throwingSped: 165,
  battingAverage: 0.286,
};
