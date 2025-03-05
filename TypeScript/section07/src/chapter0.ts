/**
 * 제네릭 (일반적인, 포괄적인)  ,, 제네럴 호스피탈 ( 종합병원 )
 * 모든 타입에 두루두루 범용할 수 있는 함수
 */

// 제네릭 함수
function func<T>(value: T): T {
  // 타입변수
  return value;
}

let num = func(10);
//num.toUpperCase();

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("String");

let arr = func<[number, number, number]>([1, 2, 3]); // 튜플 함수.
