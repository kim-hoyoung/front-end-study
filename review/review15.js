//2015 자바스크립트 표준 ES6 에서는 class 라는 계념이 추가됨.

// class

// Constructor Function 함수와 비교

function User1(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}
//---------------------------------------------------------

// 클래스는 프로퍼티들을 constructor 안에 메소드는 바깥에 분리해서 작성한다.
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: "스웨터",
  price: 30000,
};

const user1 = new User("이메일", "생년월일");
console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);
