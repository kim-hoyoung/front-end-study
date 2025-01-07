// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스를 통한 순회.
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문을 통한 순회.
for (let item of arr) {
  //  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "hoyoung",
  age: 27,
  hobby: "축구",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person); //Object를 통해 객체 key값을 배열로 만들어줌
//console.log(keys);

for (let i = 0; i < keys.length; i++) {
  //  console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  //  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
//console.log(values);
for (let value of values) {
  console.log(value);
}

//-------------------------------------------------------------
// 2.3 for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// for of 는 배열에만 사용가능,
// for in 은 객체에만 사용가능
