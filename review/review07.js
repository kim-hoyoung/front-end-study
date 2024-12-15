// for..in 반복문

// for (변수 in 객체) {
//   동작부분;
// }

let korea = {
  name: "한국",
  bornYear: 1999,
  isVeryNice: true,
};

// korea라는 객체를 만들어서 for in 문으로 반복
// korea 객체의 프로퍼티 갯수 만큼 반복하는 방식
// let의 변수는 임의의 변수임.
for (let key in korea) {
  console.log(key);
  console.log(korea[key]);
}
