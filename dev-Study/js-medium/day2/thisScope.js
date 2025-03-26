const user = {
  name: "Alice",
  sayHi: function () {
    setTimeout(() => {
      console.log(`안녕! 나는 ${this.name}야.`);
    }, 1000);
  },
};

user.sayHi(); // 결과는?
