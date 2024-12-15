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
