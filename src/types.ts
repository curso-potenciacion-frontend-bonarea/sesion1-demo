type Order = {
  id: number;
  date: Date;
  isSent: boolean;
};

enum PaymentTypeEnum {
  card = "card",
  transfer = "transfer",
  cash = "cash",
}

// ## Union type
type PaymentType = "card" | "transfer" | "cash";

const checkout = (order: Order, payment: PaymentType) => {
  // ...
};

const order: Order = {
  id: 1,
  date: new Date(),
  isSent: true,
};

checkout(order, "card");

// ## Function types
const getOrder = (orders: Order[], predicate: (id: number) => Order) => {};

getOrder([], (id: number) => {
  const order: Order = {
    id: 1,
    date: new Date(),
    isSent: true,
  };

  return order;
});

// ## Tipar objetos
// "@typescript-eslint/consistent-type-definitions": ["error", "type"],
/* interface User {
  id: number;
  name: string;
  username: string;
}

interface Admin extends User {
  permissions: number[];
} */

type User = {
  id: number;
  name: string;
  username: string;
};

type Admin = User & {
  permissions: number[];
};

const luis: User = {
  id: 1,
  name: "luis",
  username: "luisname",
};

const marta: User = {
  id: 1,
  name: "Marta",
  username: "marta",
};

// ## Record
const printUserProperties = (object: Record<string, User>): void => {
  // ...
};
