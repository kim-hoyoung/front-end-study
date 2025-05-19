/**
 * keyof 연산자 : 무조건 타입에서만 사용할 수 있다.
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(
  person: Person,
  key: keyof Person /* keyof typeof person */
) {
  return person[key];
}

const person /*: Person */ = {
  name: "홍길동",
  age: 27,
};

getPropertyKey(person, "name");
