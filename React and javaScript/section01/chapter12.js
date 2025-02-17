// 1. 함수 표현식

function funcA() {
  //  console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수
let varB = function () {
  // 선언식은 아니다. 함수의 이름으로 부를 수 없기 때문.
  console.log("fucnB");
};

varB();

// 2. 화살표 함수
// let varC = () => {
//     return 1;
// };
// console.log(varC());

let varC = (value) => value + 1;

console.log(varC(10));
