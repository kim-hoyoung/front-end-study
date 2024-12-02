// 함수선언

// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting(); // 함수를 호출할땐 반드시 소괄호 같이 작성해야 함.
// console.log("호출 후");

function getArea(width, height) {
  //함수 내부에 또다른 함수도 만들 수 있다 (중첩함수)
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;

  return area; // 리턴문 실행 후 값 종료.
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

let area3 = getArea(120, 200);
console.log(area3);

// JavaScript는 함수의 선언문을 호출문 보다 아래에 두어도 아무런 문제가 없음.
// 호이스팅(끌어올리다) 이라는 기능때문임
