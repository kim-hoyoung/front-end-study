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

// console.log(objectName.name);
// console.log(objectName.get_data());

const user = {
  age: 10,
  name: "Dave",
  details: {
    hobby: "coding",
    major: "korean",
    get_hobby: () => this.hobby, //this문법은 화살표 함수에서 쓰지 않는게 좋아용
  },
};

// console.log(user.details.get_hobby());

// getter setter

const user1 = {
  age: 10,
  name: "Dave Lee",

  get get_age() {
    return this.age;
  },
  set set_age(value) {
    this.age = value;
  },
};

console.log(user1.get_age); // 내부 프로퍼티를 직접 건드는걸 지양 하기 위해, getter, setter를 사용한다.
user1.set_age = 20;
console.log(user1.get_age);

console.log("----------------------");

// 2. new Object() 로 생성하는 방식 (거의 안쓰이긴 해)

const user2 = new Object();

user2.age = 10;
user2.name = "Kim";
user2.get_data = function () {
  return 1 + 2;
};

console.log(user2.age, user2.name, user2.get_data());
console.log("----------------------");

// 3. 생성자 함수로 생성하는 방식

function User3(age, name) {
  this.age = age;
  this.name = name;
  this.get_data = function () {
    return this.age;
  };
}

const dave = new User3(10, "Dave");
console.log(typeof dave);
console.log(dave.age, dave.name, dave.get_data());

// 프로토타입
// 생성자 함수에 프로퍼티 또는 메서드 정의가 가능.

function User4(age, name) {
  this.age = age;
  this.name = name;
}

User4.prototype.message = function () {
  return "Hello";
};

User4.prototype.hobby = "coding";

const ho = new User4(10, "Ho");
console.log(ho.age, ho.name, ho.hobby, ho.message());
