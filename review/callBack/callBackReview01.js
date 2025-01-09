// function callBack() {
//   const LateHi = setTimeout((LateHi) => {
//     console.log("hi");
//   }, 3000);
// }

// callBack();

// function Hi(callBack) {
//   console.log("안녕");
//   callBack();
// }

// Hi(() => console.log("콜백 함수 실행됨"));

function Ho(lalal) {
  console.log("호영");
  lalal();
}

Ho(function () {
  console.log("dd");
});
