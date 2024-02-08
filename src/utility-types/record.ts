const coordinates = ["x", "y", "z"] as const;

type Coordinate = (typeof coordinates)[number];
//   ^?

type Coordinates = Record<Coordinate, number>;

const point: Coordinates = {
  x: 10,
  y: 2,
  z: 10,
};

// ###########

type RolesNames = "superadmin" | "admin" | "guest";

interface User {
  id: number;
  username: string;
  password: string;
  roles: Record<RolesNames, boolean>;
}

const luis: User = {
  id: 1,
  username: "luis",
  password: "luis1234",
  roles: {
    superadmin: false,
    admin: false,
    guest: true,
  },
};

function checkUserRol(user: User, role: RolesNames): boolean {
  return user.roles[role];
}

export default {};
