// 객체, 프로퍼티( 일종의 변수 ) 와, 메서드 (일종의 함수)로 이루어질 수 있다고 이해하면 됨.
// javascript 객체의 프로퍼티는 보통 key와 value로 이루어져 있다고 이야기 함

// javaScript 객체 생성 방법
// 1. 객체 리터럴 방식
const objectName = {
  id: 12,
  name: "dave",
  get_data: function () {
    return 1 + 2;
  },
};

console.log(objectName.name);
console.log(objectName.get_data());
