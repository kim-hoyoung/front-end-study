//  1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

// 이렇게 0이나 1처럼 배열의 원소 중에 몇 번째 원소를 가져오고 싶은지 의미하는
// 숫자를 인덱스 라고 표현한다.

arrC[0] = "hello";

console.log(item1, item2);
