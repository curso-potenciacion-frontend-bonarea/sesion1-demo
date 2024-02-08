/* eslint-disable @typescript-eslint/class-literal-property-style */
// ## Generics
function identity<Type>(value: Type): Type {
  return value;
}

function getLongestElement<Type extends { length: number }>(
  elements: Type[]
): Type {
  return elements.reduce((accumulator, element) =>
    accumulator.length > element.length ? accumulator : element
  );
}

const elements = ["hola", "adeu", "ens veiem demà"];

const element = getLongestElement(elements);

interface Circuit {
  id: number;
  name: string;
  length: number;
}

const circuits: Circuit[] = [
  {
    id: 1,
    name: "Jarama",
    length: 300,
  },
  {
    id: 2,
    name: "Montmelo",
    length: 400,
  },
];

const longestCircuit = getLongestElement(circuits);

// ## Generic in interfaces
interface User<IdType> {
  id: IdType;
  name: string;
  age: number;
}

const luis: User<string> = {
  id: "aaa12",
  name: "Luis",
  age: 22,
};

// ## Generics in classes
class CustomStorage<Type> {
  private readonly key = "value";

  getData(): Type {
    const value = localStorage.getItem(this.key);

    if (!value) {
      throw new Error();
    }

    return JSON.parse(value) as Type;
  }

  setData(value: Type): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}

const namesStorage = new CustomStorage<string>();
const circuitsStorage = new CustomStorage<Circuit[]>();

namesStorage.setData("Luis");
namesStorage.getData();

circuitsStorage.setData([]);
circuitsStorage.getData();

export default {};
