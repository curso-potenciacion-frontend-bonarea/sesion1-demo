type TrafficLightsStatusForVehicles = "rojo" | "amarillo" | "verde";
type TrafficLightsStatusForPedestrians = Exclude<
  TrafficLightsStatusForVehicles,
  "amarillo"
>;

const trafficLights: TrafficLightsStatusForPedestrians = "rojo";

// ###########

type BaseUser = {
  id: number;
  username: string;
};

type Admin = BaseUser & {
  level: number;
  permissions: number[];
};

type LoggedUser = BaseUser & {
  sessionId: number;
  loginTimestamp: number;
};

type Guest = BaseUser & {
  ip: string;
};

type User = Admin | LoggedUser | Guest;

type RegisteredUser = Exclude<User, Guest>;

const emailUser = (user: RegisteredUser): void => {
  // ...
};

// ##############
type NoString<Type> = Exclude<Type, string>;

const logValue = <Type>(value: NoString<Type>): void => {
  // ...
};

export default {};
