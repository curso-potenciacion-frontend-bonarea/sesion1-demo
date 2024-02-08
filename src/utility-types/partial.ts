interface User {
  id: number;
  name: string;
  username: string;
  age: number;
  isAdmin: boolean;
}

type MayBe<Type> = Type | undefined;

const users: User[] = [
  {
    id: 1,
    name: "Luis",
    username: "luis",
    age: 33,
    isAdmin: true,
  },
  {
    id: 2,
    name: "Marta",
    username: "marta",
    age: 31,
    isAdmin: true,
  },
  {
    id: 3,
    name: "Mario",
    username: "mariogl",
    age: 40,
    isAdmin: false,
  },
];

const findUser = (users: User[], userData: Partial<User>): MayBe<User> => {
  const foundUser = users.find((user) =>
    Object.entries(userData).every(
      ([key, value]) => user[key as keyof User] === value
    )
  );

  return foundUser;
};

const mayBeMario = findUser(users, {
  name: "Mario",
  username: "mariogl",
});

export default {};
