// 자료형 ( 숫자, 문자, 불린 typeof, 형변환, null, undefined)

// 문자열
console.log(7);
console.log(3.14);
// 이건 될 수 없음 console.log(문자열);
console.log("문자문자열");

// 문자열은 ",' 를 사용해줘야 합니다.
// ', 과 " 는 처음과 끝이 동일해야 함.
("문자열");
("문자열");

console.log("I'm Hoyoung");
console.log('He said  "I\'m Hoyoung" ');
console.log(`He said "I'm hoyoung"`);

// 문자열 덧셈
console.log("Hello" + "Hoyoung");
console.log("3" + "6");

// 불린 (Boolean)

console.log(2 > 1);
console.log(2 < 1);
console.log(3 === 3);
console.log(3 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);
console.log(!!true);

//typeof 연산자
console.log(typeof 101);
console.log(typeof 1.0); //javaScript 는 숫자와 소수 다 number
console.log(typeof "문자");
console.log(typeof true);

let name = "hoyoung";
function callMyName() {
  return name;
}
console.log(callMyName());

console.log(typeof callMyName);
console.log(typeof name);

console.log(typeof "Hello" + "hoyoung");
//Stringhoyoung 가 출력된다
console.log(typeof 8 - 3);
// NaN(Not a Number) 라는 문구가 출력된다
// typeof 도 연산자이기 때문에 우선순위로 인해 해당 결과가 출력됨.
// 이럴 땐 괄호를 이용해서 우선순위를 높여주면 됨.

// 형 변환 (Type Conversion)
console.log("10" + "5");
console.log(10 + 5);

// String, Number, Boolean
console.log(Number("10") + Number("5"));
console.log(String(10) + String(5));

console.log("");

// 문자 -> 불린
let x = "문자";
let nx = "";
console.log(x);
console.log(Boolean(x));
console.log(Boolean(nx));
console.log(typeof x);
console.log(typeof Boolean(x));

console.log("");

// 숫자 -> 불린
let y = 123;
let ny = 0;
let nny = NaN;
console.log(y);
console.log(Boolean(y));
console.log(Boolean(ny));
console.log(Boolean(nny));
console.log(typeof y);
console.log(typeof Boolean(y));

// 빈 문자 , 0, NaN 은 Boolean 값이 false로 나오게 된다
// 이런 것들은 falsy 값으로 불린다.

console.log("4" - true);

// 템플릿 문자열
// template: 일정한 툴 , 형식

let year = 2018;
let month = 3;
let day = 11;

console.log("생년월일은 " + year + "년 " + month + "월 " + day + "일 입니다.");
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;
function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(
    `${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`
  );
}

// 테스트 코드
calcWage("김윤식", 208, 11340);
calcWage("성규재", 175, 12160);
calcWage("손태웅", 161, 13070);
calcWage("허우선", 222, 10980);

//자료형
// null , undefined

// null : 의도적으로 값이 없음을 표현할 때 사용하는 값.
// undefined : 값이 없다는 것을 확인하는 값.

let undefinedTest;
console.log(undefinedTest);

undefinedTest = null;
console.log(undefinedTest);

console.log(null == undefined);
console.log(null === undefined);

// 값이 없음을 표현한다면 null 을 사용하는게 좋다.
