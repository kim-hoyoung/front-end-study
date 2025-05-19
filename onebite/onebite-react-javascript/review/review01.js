// 변수 선언
let espresso = 10;
let milk = 170;
let chocolateSyrup = 50;
let whippedCream = 60;

// 변수 출력
console.log(espresso);
console.log(espresso + milk);
console.log(espresso + chocolateSyrup + milk);
console.log(espresso + chocolateSyrup + milk + whippedCream);

// 함수 선언
function greetings() {
  console.log("Hi");
  console.log("안녕");
  console.log("안녕하세요");
  console.log("룰루랄라");
}
// 함수 호출
greetings();

function printChorus() {
  console.log("무궁화 삼천리 화려 강산");
  console.log("대한 사람 대한으로 길이 보전하세");
}
// 애국가 가사
console.log("1절");
console.log("동해 물과 백두산이 마르고 닳도록");
console.log("하느님이 보우하사 우리나라 만세");
printChorus();

console.log("2절");
console.log("남산 위에 저 소나무 철갑을 두른 듯");
console.log("바람서리 불변함은 우리 기상일세");
printChorus();

console.log("3절");
console.log("가을 하늘 공활한데 높고 구름 없이");
console.log("밝은 달은 우리 가슴 일편단심일세");
printChorus();

console.log("4절");
console.log("이 기상과 이 맘으로 충성을 다하여");
console.log("괴로우나 즐거우나 나라 사랑하세");
printChorus();

// 파라 파라 파라 미터 = 매개변수 사용

function hello(sentence) {
  console.log(sentence);
}

hello("hihihihi");

function welcome(name) {
  console.log("안녕하세요 " + name + "입니다.");
}
welcome("김호영");
welcome("김호일");
welcome("김호이");

function printSquare(x) {
  console.log(x * x);
}

printSquare(2);
printSquare(4);
printSquare(5);

function teraToGiga(gb) {
  console.log(gb * 1024 + " GB 입니다.");
}

function teraToMega(mb) {
  console.log(mb * 1024 * 1024 + " GB 입니다.");
}

teraToGiga(2);

teraToMega(2);
