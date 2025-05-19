/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name : number; 충돌이 일어난다고 얘기한다. 확장시 사용했던 서브타입도 안됩니다.
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  // 모듈 보강
  c: string;
}
const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
