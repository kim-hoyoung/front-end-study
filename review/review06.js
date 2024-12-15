// 객체와 메소드 (Method)

// 메소드는 어떤 객체의 고유한 동작으로써 함수에 의미를 부여할 수 있기 때문.
let greetings = {
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
  sayHi: function () {
    console.log("Hi!");
  },
  sayBye: function () {
    console.log("Bye!");
  },
};

greetings.sayHello("김호영");
greetings["sayHello"]("김호영");

// 메소드 예시

let rectAngle = {
  width: 30,
  height: 50,
  getArea: function () {
    return rectAngle.width * rectAngle.height;
  },
};

let triAngle = {
  width: 15,
  height: 40,
  getArea: function () {
    return (triAngle.width * triAngle.height) / 2;
  },
};

// 객체(Object)와 프로퍼티

let korea = {
  name: "한국",
  bestCountry: "seoul",
  isVeryNice: true,
  "random dot": "hoyoung",
  bestPeople: {
    who: "김호영",
    age: 27,
  },
};

// 점 표기법

console.log(korea.name);

console.log(korea.bestPeople.who);

// 대괄호 표기법
console.log(korea["random dot"]);
console.log(korea.bestPeople["age"]);

let propertyName = "name";
console.log(korea[propertyName]);

// 프로퍼티 추가 수정 삭제

console.log(korea.ceo);
korea.ceo = "김김김";
console.log(korea.ceo);

delete korea.ceo;
console.log(korea.ceo);

// 확인
console.log(korea.name !== undefined);
console.log("name" in korea);
