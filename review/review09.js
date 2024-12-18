// 배열 (Array)
let courseRanking = [
  "자바스크립트 프로그래밍 기초",
  "김호영",
  "프론트 개발자가 될 수 있을것인지.",
  "그것이 궁금하다",
];

// index == PropertyName

// indexing (0 ~ ...)
//console.log(배열이름[index]);

console.log(courseRanking[0]);

let dataType = ["number", "string", "boolean", "null", "undefined", "object"];

// for..in으로 출력해보기
for (value in dataType) {
  console.log(dataType[value]);
}

console.log(typeof dataType);

console.log(dataType.length);
console.log(dataType["length"]);
console.log(dataType[dataType.length - 2]);

// 배열 값 추가 및 수정, 삭제
// 빈공간은 empty로 설정되게 된다.

dataType[6] = "empty"; // 추가 할 수 있고 기존인덱스의 값을 다르게 설정해서 수정도 가능하다
console.log(dataType[6]);

// 요소만 삭제 (완벽하게 삭제 안됨)
delete dataType[6];

// splice (startIndex, deleteCount, item)
dataType.splice(6);
console.log(dataType);

// 1번 인덱스를 기준으로 그 뒤의 2개 삭제
dataType.splice(1, 2);
console.log(dataType);

// 1번 인덱스 2번 인덱스 삭제하고 1번 , 2번 값 추가
dataType.splice(1, 1, "1번", "2번");
console.log(dataType);

numbers = [1, 2, 3, 5, 8, 9];

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수 삭제하기
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;
  }
}

console.log(numbers);

// // 배열의 첫 요소를 삭제: shift()
// 배열이름.shift();

// // 배열의 마지막 요소를 삭제: pop()
// 배열이름.pop();

// // 배열의 첫 요소로 값 추가: unshift(value)
// 배열이름.unshift("추가할 값");

// // 배열의 마지막 요소로 값 추가: push(value)
// 배열이름.push("추가할 값");

// 배열에서 특정 값 찾기 (indexOf / lastIndexOf)

let brands = ["google", "kakao", "naver", "kakao"];

// 포함되면 item이 있는 인덱스 안되면 -1 여러번일 시 처음 발견된 인덱스

console.log(brands.indexOf("kakao"));
console.log(brands.indexOf("Daum"));

// lastIntdexOf는 뒤에서부터 탐색 즉 -3
console.log(brands.lastIndexOf("kakao"));
console.log(brands.lastIndexOf("Daum"));

// 특정 값이 있는지 확인하기 (includes)

console.log(brands.includes("kakao"));
console.log(brands.includes("Daum"));

// 배열 뒤집기 (reverse)

brands.reverse();
console.log(brands);

// for...of 반복문
let influencer = ["dale carnegle", "hangang", "kimhoyoung"];

// for ( 변수 of 배열 ) {
//     동작부분;
// }

for (let element of influencer) {
  console.log(element);
}

// 특별한 환경에 for in 문 쓰면 제약이 생길 수 있음 (객체에 최적화)
for (let index in influencer) {
  console.log(influencer[index]);
}

// 투표 결과 알아보기
let votes = [
  "김호일",
  "김호일",
  "김호영",
  "김호영",
  "김호영",
  "김호일",
  "김호일",
  "김호영",
  "김호영",
  "김호일",
  "김호영",
  "김호영",
  "김호영",
  "김호영",
  "김호일",
  "김호일",
  "김호영",
  "김호일",
  "김호일",
  "김호일",
  "김호일",
  "김호일",
  "김호영",
  "김호영",
  "김호영",
  "김호영",
  "김호영",
  "김호일",
  "김호영",
  "김호영",
  "김호영",
  "김호영",
  "김호일",
  "김호영",
  "김호영",
  "김호영",
  "김호일",
  "김호일",
  "김호일",
  "김호영",
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
// let JeaCount = 0;
// let gueCount = 0;
// for (let name of votes) {
//   if (name === '김호일') {
//     JeaCount++;
//   } else if (name === '김호영') {
//     gueCount++;
//   }

//   voteCounter.김호일 = JeaCount;
//   voteCounter.김호영 = gueCount;

// }

//or

for (let name of votes) {
  if (name in voteCounter) {
    voteCounter[name] += 1;
  } else {
    voteCounter[name] = 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);
