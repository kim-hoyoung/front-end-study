// String
let myString = "hi korea";

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 4));
console.log(myString.slice(3));
console.log(myString.slice());

// 양 끝 공백 제거
console.log(myString.trim());

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

// 요소 탐색
console.log(myString.indexOf("k"));
console.log(myString.lastIndexOf("r"));

// 요소 접근
console.log(myString[3]);
console.log(myString.charAt(3));

// 문자열 길이
console.log(myString.length);
