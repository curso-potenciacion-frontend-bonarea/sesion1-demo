declare let data: string | number;

const isString = (data: string | number): data is string => {
  return typeof data === "string";
};

if (isString(data)) {
  data.toUpperCase();
} else {
  data.toFixed();
}

// ############

interface UserBase {
  name: string;
  username: string;
  password: string;
}

interface Customer extends UserBase {
  pin: string;
  registerDate: Date;
  hasOrders: boolean;
}

interface Admin extends UserBase {
  level: number;
  department: string;
  permissions: ("post" | "update" | "delete")[];
  fingerprint: string;
}

type User = Customer | Admin;

const isAdmin = (user: User): user is Admin => {
  return "level" in user;
};

const isCustomer = (user: User): user is Customer => {
  return "pin" in user;
};

const checkUserIdentification = (user: User): boolean => {
  if (isAdmin(user)) {
    return user.fingerprint === "asdffasdf";
  }

  if (isCustomer(user)) {
    return user.pin === "1234";
  }

  const _exhaustive: never = user;
  return _exhaustive;
};

export default {};
