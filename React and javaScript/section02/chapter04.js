// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여래개의 값을 개별로 흩뿌려주는 역할.

// 배열

let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // 인덱스로 일일히 펼쳐놓는건 위험함.
let arr2 = [4, ...arr1, 5, 6]; // 이게 Spread 연산자
console.log(arr2);

// 객체 ----------------------

let obj1 = {
  a: 1,
  b: 2,
};
// let obj2 = {
//     a: obj1.a,
//     b: obj1.b,
//     c: 3,
//     d: 4,
// };  원래는 이렇게 했었어야 했지만

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
// 이렇게 간단하게 풀어나갈 수 있다.
console.log(obj2);

// 함수 ---------------------

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수.

function funcB(one, two, ...rest) {
  console.log(one, two);
  console.log(rest);
}
funcB(...arr1);
