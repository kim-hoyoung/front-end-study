// 1. 단락 평가.
// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// console.log(returnFalse() && returnTrue());
// console.log("");
// console.log(returnTrue() && returnFalse());
// console.log("");
// console.log(returnTrue() || returnFalse());
// ture 함수 문구가 출력되지 않음.
// 즉 연산의 결과를 확정할 수 있다면 두 번째 피연산자의 값에는 접근 x

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "김호영" });
