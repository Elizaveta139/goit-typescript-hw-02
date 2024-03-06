/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = "hello";
union = 10;

// let literal: "enable" | "disable";
type Literal = "enable" | "disable";
let literal: Literal;
literal = "enable";
literal = "disable";

export {};
