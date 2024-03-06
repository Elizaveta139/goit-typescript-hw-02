// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

// type age = number;
// type name = string;
// type toggle = boolean;
// type empty = null;
// type notInitialize = undefined;

let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;

let callback = (a: number): number => {
  return 100 + a;
};
const res = callback(100);

export {};
