interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

// ########

type IndividualCustomerData = {
  type: "individual";
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
};

type CompanyCustomerData = {
  type: "company";
  companyName: string;
  companyTaxId: number;
};

type Customer = {
  id: number;
  acquisitionDate: Date;
  data: IndividualCustomerData | CompanyCustomerData;
};

const getCustomerName = (customer: Customer): string => {
  switch (customer.data.type) {
    case "individual":
      return customer.data.firstName + " " + customer.data.lastName;
    case "company":
      return customer.data.companyName;
    default:
      const _exhaustive: never = customer.data;
      return _exhaustive;
  }
};

const luis: Customer = {
  id: 1,
  acquisitionDate: new Date(),
  data: {
    type: "individual",
    firstName: "Luis",
    lastName: "González",
    socialSecurityNumber: "222",
  },
};

const bonArea: Customer = {
  id: 2,
  acquisitionDate: new Date(),
  data: {
    type: "company",
    companyName: "bonÀrea",
    companyTaxId: 22322,
  },
};

const luisName = getCustomerName(luis);
const bonAreaName = getCustomerName(bonArea);

export default {};
