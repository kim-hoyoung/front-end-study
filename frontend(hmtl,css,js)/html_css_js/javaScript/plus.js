// 삼항 연산자 간결한 문법으로, 자주 사용될 수 있음.

const myArray = [1, 2];
let descMyArray = "";

if (myArray.length === 0) {
  descMyArray = "빈 배열";
} else {
  descMyArray = "아이템이 있는 배열";
}

console.log(descMyArray);

// 삼항 연산자로 처리한다면 아래처럼 짧게 작성할 수 있다.
myArray.length === 0
  ? console.log("빈 배열")
  : console.log("아이템이 있는 배열");

// 인자 설정

const pringData = (name) => {
  console.log(name);
};
pringData("hi");

console.log("000000000000000000000");

// 구조 분해 할당 (비구조화 할당) 문법 배열이나 객ㄱ체의 속성을 해체해서, 값을 개별 변수에 대입할 수 있게 하는 문법.
let data = {
  name: "kim",
  age: 27,
};
// 동일한 프로퍼티명을 써줘야, 해당 프로퍼티에 맞는 값이 대입됨.
let { name, age } = data;
console.log(name, age);

// 프로퍼티명과 다른 변수명을 사용하고자 할 경우, 대입할 프로퍼티명: 다른변수명 의 형태로 써줘야 한다.
let { name: myName, age: myAge } = data;
console.log(myName, myAge);

// 꼭 객체의 모든 프로퍼티를 가져올 필요는 없고, 객체의 프로퍼티 중 가져오고 싶은 데이터만 가져올 수 있다
let { name: myName2 } = data;
console.log(myName2);

// 가져올 프로퍼티가 없을 경우 디폴트 값을 대입하기
let data1 = {
  name1: "Dave",
  age: 28,
};

let { name1, hobby = "coding" } = data1;
console.log(name1, hobby);

// 가져올 프로터피명을 다른 변수에 저장하되, 해당 프로퍼티명이 객체 안에 없을 경우, 다른 변수에 디폴트값을 대입
let data3 = {
  name3: "kim",
  age: 20,
};

let { name3, age: myAge1 = 25, hobb1 = "codding" } = data3;

console.log(name3, myAge1, hobby);

console.log("dddddddddddddddddddddddddddddddd");

// 배열 분해 할당.

let Array = [1, 2, 3, 4];
let [first, second, third, fourth] = Array;

console.log(first, second, third, fourth);

// 배열의 일부만 추출 가능, 첫 번째 아이템부터 대입가능,
let [dataa, dataaa] = Array;
console.log(dataa, dataaa);

// 대입할 아이템이 없을 경우, undefined로 대입
let Array1 = [1, 2];
let [item1, item2, item3] = Array1;
console.log(item1, item2, item3);
