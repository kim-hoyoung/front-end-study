// 여러개의 파라미터 만들기

function printSum(num1, num2) {
  console.log(num1 + num2);
}

printSum(10, 5);
printSum(6, 2);

// function introduce(name, birth, job) {
//   console.log("내 이름은 " + name + " 생일은 " + birth + " 직업은 " + job);
// }

// introduce("김호영", "99.01.20", "개발자가 되기 위한 학생");

function bmiCalculator(name, weight, height) {
  let bmi = weight / ((height * height) / 10000);
  console.log(name + "님의 체질량지수는 " + bmi + "입니다.");
}

bmiCalculator("홀쭉이", 43.52, 160);
bmiCalculator("코린이", 61.25, 175);
bmiCalculator("통통이", 77.76, 180);

// return 함수

function getTwo() {
  return 2;
}

console.log(getTwo());
console.log(getTwo);

function getTwice(number) {
  return number * 2;
}
let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);

function interestCalculator(myMoney, saveTerm, interestRate) {
  return (myMoney * saveTerm * interestRate) / 100;
}

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log("맡긴 금액은 " + myMoney + "원 입니다.");
console.log("이자는 " + myInterest + "원 입니다.");
console.log("최종 받을 금액은 " + totalMoney + "원 입니다.");
