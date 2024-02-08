interface User {
  id: number;
  username: string;
  email: string;
  age: number;
}

type UserProperties = keyof User; // "id" | "username" | "email" | "age"

const getUserProperty = <Key extends keyof User>(
  user: User,
  property: Key
): User[Key] => {
  return user[property];
};

const luis: User = {
  id: 1,
  username: "luis",
  email: "luis@luis.com",
  age: 30,
};

const luisId = getUserProperty(luis, "id");
const luisUsername = getUserProperty(luis, "username");

const updateUserProperty = <Key extends keyof User>(
  user: User,
  property: Key,
  value: User[Key]
): User => {
  const newUser = { ...user };

  newUser[property] = value;

  return newUser;
};

updateUserProperty(luis, "username", "luis");

// #########
interface Form {
  name: string;
  username: string;
  email: string;
  age: number;
}

// Exhaustive check

const validateField = (formData: Form, field: keyof Form): boolean => {
  switch (field) {
    case "name":
      return formData[field].length > 2;
    case "email":
      return formData[field].includes("@");
    case "age":
      return formData[field] >= 18;
    case "username":
      return formData[field].length > 5;
    default:
      const _exhaustive: never = field;
      throw new Error("");
  }
};

const userFormData: Form = {
  name: "Marta",
  username: "marta",
  email: "marta@marta.com",
  age: 30,
};

validateField(userFormData, "age");

export default {};
