// Quiz 1. 모든 약수찾기
// 변수 num의 모든 약수를 다 찾아서 출력하세요

let num = 100;

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

// Quiz 2. 소수 판별기 (에라토스테네스의 체)
// isPrimeNumber함수를 완성하세요

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// Quiz 3. 계산기 만들기
// 콜백함수를 이용하여 다음 요구사항을 만족하는 코드를 작성하세요.

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  console.log(operation(num1, num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);
