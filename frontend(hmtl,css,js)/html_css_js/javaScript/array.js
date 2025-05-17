// javaScript 의 배열 CRUD 학습하기
// Create, Reset, Update, Delete

//Create
const myArray = [1, 2, "dave", 100];
const newArray = new Array();
console.log(myArray.length);

newArray[0] = 1;
newArray[1] = 2;
newArray[3] = "dave";
newArray[4] = 100;

// Read
console.log(newArray[0]);
console.log(newArray[newArray.length - 1]);

// Update
const updateArray = [1, 2, "Dave", 100];
updateArray[0] = "바보";
console.log(updateArray[0]);

// Delete
// splice(삭제를 시작할 인덱스 번호, 몇 개 삭제할 지.)
const spliceArray = [1, 2, "Dave", 100];
spliceArray.splice(1, 1);
console.log(spliceArray);

// 특별한 형태의 javaScript 배열
const data = [1, 2, "dave", null];
const data1 = [
  { name: "Dave", age: 20 },
  { name: "Have", age: 40 },
];
const data2 = [
  [10, 20, 30],
  [40, 50, 60],
];

console.log("=-----------------------=");
// -- 다양한 배열 관련 기능 (함수)

// push 배열의 끝에 아이템 추가
const pushArray = [1, 2, "Dave", 100];
pushArray.push(5);
console.log(pushArray);

// pop 배열의 끝에 있는 아이템을 리턴해주고, 해당아이템은 배열에서 삭제
const popArray = [1, 2, "Dave", 100];
let popData = popArray.pop();
console.log(popArray);
console.log(popData);

// shift 배열의 첫 번째 아이템을 삭제하고, 뒤에 있는 아이템을 앞으로 당김
const shiftMyArray = [1, 2, "dave", 100];
shiftMyArray.shift();
console.log(shiftMyArray);

//concat 두 배열합치는 함수
const Array1 = [1, 2];
const Array2 = [3, 4];
let Array3 = Array1.concat(Array2);
console.log(Array3);

// join 아이템 사이에 특정 문자열을 넣어서, 하나의 문자열 로 만들어줌
let joinArray = [1, 2, "dave", 100];
joinArray = joinArray.join("|");
console.log(joinArray, typeof joinArray); // 문자열,,!

// reverse 배열을 역순으로 배치
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray);

// slice 배열의 일부분 반환 (splice랑 헷갈리면 안됨)
// slice(a,b): a 아이템 인덱스부터 시작해서 , b-1 아이템 인덱스까지 추출
let sliceArray = [1, 2, 3, 4, 5];
console.log(sliceArray.slice(0, 2));

// forEach for문을 대체해서, 간단히 배열의 각 아이템을 가졍로 수 있는 함수
let forArray = [1, 2, 3, 4, 5];
forArray.forEach((item) => {
  console.log(item);
});

// map 배열의 각 아이템에 정의한 함수를 정의해서, 새로운 배열을 리턴하는 함수
const mapArray1 = [1, 2, 3, 4, 5];
const mapArray2 = mapArray1.map((item) => item * 2);
console.log(mapArray2);

console.log("------------------------");

// indexOf 배열에서 지정한 데이터가 위치한 인덱스 번호를 리턴
let indexArray = [1, 2, 3, 4, 5];
let index = indexArray.indexOf(3);
console.log(index);

// findIndex 배열의 아이템이 객체일 경우, 해당 객체에서 지정한 데이터 위치를 찾을 수있는 방법을 제공
const findIndexArray = [
  {
    id: 1,
    name: "Dave Lee",
  },
  {
    id: 2,
    name: "Kim",
  },
];
console.log(findIndexArray.indexOf("Kim"));
console.log(findIndexArray.findIndex((item) => item.name === "Kim"));

// find findIndex와 유사하지만, 지정한 데이터 위치를 리턴하는 것이 아니라, 지정한 데이터가 들어있는 객체를 리턴.
const findArray = [
  {
    id: 1,
    name: "Dave Lee",
  },
  {
    id: 2,
    name: "Kim",
  },
];
console.log(findIndexArray.indexOf("Kim"));
console.log(findIndexArray.findIndex((item) => item.name === "Kim"));
console.log(findIndexArray.find((item) => item.name === "Kim"));

// filter 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용하는 기능

let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = filterArray.filter((item) => item % 2 === 0);
console.log(even);
