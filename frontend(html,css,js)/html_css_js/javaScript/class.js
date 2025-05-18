// JavaScript 클래스
class User1 {
  constructor(name, age) {
    // 생성자는 constructor 안에 넣으면 된다, 프로퍼티 this 로 정의
    this.name = name;
    this.age = age;
  }

  get_message() {
    //클래스 내부에 메서드 선언 가능!function 키워드 쓰지 않는다.
    return "Hello";
  }
}

const dave = new User1("ho", 26);
console.log(typeof dave, dave.name, dave.age, dave.get_message());

// 상속 extends 사용

class Animal {
  constructor(name) {
    this.name = name;
  }
}

console.log("-------------------");

class User extends Animal {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
  }
}

const Kim = new User("Dave", "nike");

console.log(Kim.name, Kim.brand);

console.log("-------------------");

class Car {
  constructor(name) {
    this.name = name;
  }

  get_message() {
    return "booreeeeng";
  }
}

class Porche extends Car {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  get_message() {
    return "i'm porche";
  }
}

const hoyam = new Porche("hocar", 12);
console.log(hoyam.name, hoyam.age, hoyam.get_message());

console.log("-------------------");

// hasOwnProperty() 이란 , class 내부에 원래 있던 property였는지 아닌지를 확인해주는 메서드

class Computer {
  constructor(name) {
    this.name = name;
  }
  get_message() {
    return "BIBIBIBI";
  }
}

Computer.prototype.brand = "nvida";

const mac = new Computer("intel");
console.log(mac.hasOwnProperty("name")); // true
console.log(mac.hasOwnProperty("brand")); // false
