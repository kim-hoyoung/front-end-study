// javaScript 반복문.
const data = ["Dava", "Alex", "David"];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

const data2 = ["Dave", "Alex", "David"]; // 배열은 for of
for (let item of data) {
  console.log(item);
}

console.log("----------------------------");

// 객체와 for 문~~  객체는 for in

// Object.entries(), Object.keys(), Object.values()

const dataObj = {
  name: "kim",
  age: 20,
  brand: "nike",
};
console.log(Object.entries(data));
console.log(Object.keys(data));
console.log(Object.values(data));

console.log("----------------------------");

for (let property in dataObj) {
  console.log(property);
}

for (let property in dataObj) {
  console.log(property + ":", dataObj[property]);
}

// while 문도 사용 가능

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
