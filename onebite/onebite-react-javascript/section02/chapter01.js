// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if (!f4) {
//   console.log("falsy");
// }

// 2. Truthy 한 값
// -> 7가지의 Falsy 한 값들을 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t4) {
//   console.log("Truthy");
// }

// 3. 활용 사례

// function printName(person) {
//   if (person === undefined || person === null) {
//     console.log("person의 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

// let person = null;
// printName(person);

// 위의 조건문을 개선하고 turthy와 falsy를 이용하여 만들어 보면.

function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "김호영" };
printName(person);
