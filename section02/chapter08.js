// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  console.log("호영테스트:");
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes,
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열에 찾으려는 값이 여러개 존재한다면 가장 첫 번째 요소의 인덱스를 반환
let arr3 = [1, 2, 3];
let index = arr3.indexOf(1);
// 존재하지 않으면 -1 을 반환
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치) 를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});
// 위의 식 간략화.
const findedIndex1 = arr4.findIndex((item) => item === 2);

console.log(findedIndex);
console.log(findedIndex1);

// findIndex를 사용하는 이유
let objectArr = [{ name: "김호영" }, { name: "김호일" }];

console.log("hi" + objectArr.indexOf({ name: "김호영" }));

console.log(objectArr.findIndex((item) => item.name === "김호일"));

// indexOf는 얕은 비교로만 진행하기 때문에 이러한 객체 값은 찾지 못하는 반면
// findIndex는 콜백 함수를 이용해 직접 특정 프로퍼티의 값을 기준으로 비교시킬 수 있음

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "김호이" }, { name: "김호삼" }];

const finded = arr5.find((item) => item.name === "김호삼");

console.log(finded);
