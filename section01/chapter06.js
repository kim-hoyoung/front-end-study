// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;
// 덧셈하는 과정에서 num String 타입으로 묵시적으로 형 변환이 일어났기 때문.
//console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시

// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// 문자열을 숫자로 형 변환을 해 주어서 num형태로 10 + 10 이되어 20이 됨.
//console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
//parseInt 를 쓰더라도 숫자가 앞에 있어야 된다.
//console.log(10 + strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + " 입니다");
