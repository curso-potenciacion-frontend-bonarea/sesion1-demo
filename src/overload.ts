function createButton(tag: "button"): HTMLButtonElement;
function createButton(tag: "a"): HTMLAnchorElement;
function createButton(
  tag: "button" | "a"
): HTMLButtonElement | HTMLAnchorElement {
  return document.createElement(tag);
}

const anchor = createButton("a");

console.log(anchor.href);

function sayHello(name: string): string;
function sayHello(names: string[]): string[];
function sayHello(nameOrNames: string | string[]): string | string[] {
  if (typeof nameOrNames === "string") {
    return `Hello ${nameOrNames}`;
  }

  return nameOrNames.map((name) => `Hello ${name}`);
}

const greeting = sayHello("Luis");

console.log(greeting.toUpperCase());
