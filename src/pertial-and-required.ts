export {};

type Profile = {
  name: string;
  age?: number;
  zipcode: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
