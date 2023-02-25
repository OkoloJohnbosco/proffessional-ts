const x: { name: string } = {} as any;

x.name;

// Tuple types
type Foo<T extends any[]> = [boolean, ...T];

const arr: Foo<number[]> = [false, 1, 23];

const removeBool = <T extends any[]>(arr: Foo<T>): T => {
  const [first, ...others] = arr;

  return others;
};

removeBool([false, 1, 2, 3]);

type Address = [
  name: string,
  state: string,
  postal: number,
  city: string,
];

function printAddress(...address: Address) {}

printAddress('john', 'Anambra', 22, 'Awka');

// Recursive Type ALias
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;

// type Corner = `${Capitalize<'top' | 'bottom'>}-${'left' | 'right'}`;
