/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법.
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// version 1, 2 -> 오버로드 시그니처 (함수의 구현부 없이 선언식만 써 놓은 것)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처

function func(a: number, b?: number, c?: number) {
  // 위의 version1 때문에 최대한의 범위를 지정해주기 위해 "?" 사용
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//func();
func(1); // version 1
//func(1, 2);
func(1, 2, 3); // version 2
