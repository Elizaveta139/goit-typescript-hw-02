//Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

let anything: any = -20;
anything = "Text";
anything = {};

//варіант 2
let anythingTwo: unknown = -20;
anythingTwo = "Text";
anythingTwo = {};

export {};
