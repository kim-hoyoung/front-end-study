/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "dd",
  profile: {
    nickname: "windterload",
  },
  urls: ["https://naver.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // 암묵적 any타입
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

// any타입의 진화

const num = 10; // literal type으로 추론이 됨...

const str = "hello";

let arr = [1, "string"];
