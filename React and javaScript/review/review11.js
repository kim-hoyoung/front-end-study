// 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

// 16진법 (Hexadecimal)

let hex1 = 0xff; // 255
let hex2 = 0xff; // 255

// 8진법 (Octal)
let octal = 0o377; // 255

// 2진법 (binary numeral system)
let binary = 0b11111111; // 255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

// 숫자형 메소드
// Number
let myNum = 0.3591;
let myNum2 = 255;

// toFixed(0 ~ 100)
console.log(myNum.toFixed(3));

// toString(2 ~36)
console.log(myNum2.toString(2));
console.log(myNum2.toString(8));
console.log(myNum2.toString(16));

// 절대값
console.log(Math.abs(-10));

// 최댓값
console.log(Math.max(2, -1, 4, 5, 0));

// 최솟값
console.log(Math.min(2, -1, 4, 5, 0));

// 거듭제곱
console.log(Math.pow(2, 3));

// 제곱근
console.log(Math.sqrt(25));

// 반올림
console.log(Math.round(2.3));
console.log(Math.round(2.5));

// 버림과 올림
console.log(Math.floor(2.4));
console.log(Math.floor(2.8));
console.log("-");
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.8));

// 난수
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// 바보 자바스크립트
let sum = 0.1 + 0.2;

console.log(Number(sum.toFixed(1)));
console.log(+sum.toFixed(1));
console.log(Math.round(sum * 10) / 10);
