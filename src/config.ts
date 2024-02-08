import { cosa } from "./cosa";

// ## noImplicityAny
const add = (numberA: number, numberB: number) => {
  numberA.toUpperCase();

  return numberA + numberB;
};

// ## strictNullChecks
const users = [
  {
    id: 1,
    name: "Luis",
    username: "luis",
  },
  {
    id: 2,
    name: "Marta",
    username: "marta",
  },

  {
    id: 3,
    name: "Rodrigo",
    username: "rodrigo",
  },
];

const pedro = users.find((user) => user.username === "pedro");

if (!pedro) {
  throw new Error("Missing Pedro");
}

console.log(pedro.name);

// ## useUnknownInCatchVariables
class CustomError extends Error {
  patata: string;
}

try {
  // ...
} catch (error) {
  if (error instanceof CustomError) {
    error.patata;
  }
}
