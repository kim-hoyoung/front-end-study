// 자바 스크립트 객체 지향
// 객체의 상태를 나타내는 변수
// 객체의 행동을 나타내는 함수

// 객체지향 프로그래밍은
// 프로퍼티와 메소드로 이루어진 각 객체들의 상호작용을 중심으로 코드를 작성하는 것.

// Object Literal (객체 문자열)-------------------------------------------
// 객체의 상태를 담고 있는 변수들을 프로퍼티라고 함.

const user = {
  email: "happy3sk@naver.com",
  birthday: "1999-01-21",
  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  },
};
// 위의 this 는 email의 프로퍼티를 나타내는 것임.

const item = {
  name: "스웨터",
  price: 30000,
};

console.log(user.email);
console.log(user.birthday);
user.buy(item);

// 만일 수십 수백개의 객체를 만들어야하는 상황에서는 어떻게 해야 하나?
// Factory Function-----------------------------------------------------
function createUser(email, birthdate) {
  const user1 = {
    email: email,
    birthdate: birthdate,
    // 위의 프로퍼티와 파라매터가 같을 경우
    // 값을 대입하는 부분을 아예 생략해도 된다. ex) email,
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user1;
}

const user2 = createUser("happy1sk@naver.com", "1999-1-20");
const user3 = createUser("happy2sk@naver.com", "1999-1-20");
const user4 = createUser("happy4sk@naver.com", "1999-1-20");

console.log(user2.email);
console.log(user3.email);
console.log(user4.email);

user2.buy(item);
user3.buy(item);
user4.buy(item);

// Constructorr Function (생성자 함수) ------------------------------------
// 함수를 사용해서 객체를 생성하는 것
// 객체 생성을 목적으로 하는 함수 명은 대문자로 시작하는 관습이 있다.
function User(email, birthdate) {
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const user5 = new User("이메일", "1234-12-12");
console.log(user5.email);
console.log(user5.birthdate);
user5.buy(item);
