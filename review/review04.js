// 함수 활용 연습

function sayHello() {
  console.log("Hello");
  console.log("Welcome to Codeit!");
}
console.log("함수호출전");
console.log(sayHello);
console.log("함수 호출 후");

function expressMultiplication(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

// return 문과 consol.log 의 차이

function printSquare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

printSquare(3);

getSquare(3);

console.log(getSquare(3));

console.log(printSquare(3));

let area1 = calculateRectangleArea(3, 4);
let area2 = calculateRectangleArea(5, 8);
let area3 = calculateRectangleArea(7, 2);

function calculateRectangleArea(width, height) {
  return width * height;
}

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);

// 파라미터가 존재하는데 함수 호출 부분에 아무런 값이 없으면 undefined 가 출력된다
function sayHello(name) {
  console.log(`안녕 ${name}아`);
}
sayHello("김호영");
sayHello();

let x = 3;
console.log(x);
console.log(sayHello("호영짱짱"));

// 옵셔널 파라미터  생성하고 가장 뒤에다가 배치한다.
function intruoduce(name, age, nationality = "한국") {
  console.log(`내 이름은 ${name}입니다..`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

intruoduce("김호영", 4, "미국"); // 값을 모두 전달한 경우
intruoduce("");
intruoduce("김호영", 4); // 파라미터 값을 생략한 경우

function orderSetMenu(sandwich, drink = "스프라이트") {
  console.log(`주문하신 ${sandwich}, ${drink} 세트 메뉴 나왔습니다!`);
}
orderSetMenu("코드웨잇 클럽");
orderSetMenu("터키베이컨 아보카도", "코카콜라");
orderSetMenu("코드웨잇 멜트");
orderSetMenu("이탈리안 비엠티", "닥터페퍼");
orderSetMenu("에그마요", "환타 오렌지");

// Scope: 범위 , 영역

function myFunction() {
  // 블록문 (Block Statement)
  let x = 5; // 로컬 변수, 지역 변수 (Local Variable)
  console.log(x);
}

myFunction();
console.log(x);

// 로컬 변수가 전역변수보다 우위에 있다.

// 상수 ( constant ) 대문자, 두 개 이상의 단어일시 _ 로 구분한다
const PI = 3.14; // 원주율
let radius = 0; // 반지름

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return PI * radius * radius;
}

// 반지름에 따라 원의 넓이를 계산및 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}
radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());
