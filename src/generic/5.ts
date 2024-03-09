/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const age: KeyValuePair<string, number> = { key: "age", value: 25 };
const isActive: KeyValuePair<string, boolean> = {
  key: "isActive",
  value: true,
};

export {};
