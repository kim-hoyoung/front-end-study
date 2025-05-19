/**
 * 인터페이스
 */

// 자바의 인터페이스 표기법은 헝가리안? 흠,,, 뭘써야 할까용

interface Person {
  readonly name: string;
  age?: number;
  //sayHi: () => void; // 오버로딩을 구현할땐 함수 타입은 사용이 안됨
  sayHi(): void; // 메소드의 오버로드 사용하고 싶을 땐 호출 시그니처로 작성해야 함.
  sayHi(a: number, b: number): void;
}
// 인터페이스엔 유니온, 타입 별칭 안됨......

const person: Person = {
  name: "라라라",
  age: 27,
  sayHi: function () {
    //메서드
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
