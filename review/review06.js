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
