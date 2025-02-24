/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name age살 입니다.
function func(value: number | string | Date | null | Person) {
  value; // 여기선 조건문이 없기 때문에 number | string으로 나오는 반면에,
  // value.toUpperCase();
  // value.toFixed();

  if (typeof value === "number") {
    // 조건문안의 표현을 "타입 가드" 라고 얘기함.
    console.log(value.toFixed()); // 조건문이 number를 지정해줬기 때문에 number타입이 됨.
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // 조건문이 string을 지정했기 때문에 string타입이 됨.
  } else if (value instanceof Date) {
    // 왼쪽에 있는 값이 Date 객체인지 확인하는 연산자.
    console.log(value.getDate());

    // else if (typeof value === "object") {  // object 라고 해 놓으면 null도 통과를 할 수 있음.
    //console.log(value.getTime());
    //} else if ( value instanceof Person ) { // instanceof는 클래스가 아닌 객체타입은 활용할 수 없다.
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
