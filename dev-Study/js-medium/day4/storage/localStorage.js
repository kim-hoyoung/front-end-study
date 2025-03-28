// 1. 저장하기
localStorage.setItem("username", "김철수");
localStorage.setItem(
  "preferences",
  JSON.stringify({
    // 객체(자바스크립트 구조) 를 문자열로 바꿈
    theme: "dark",
    fontSize: 16,
  })
);

// 2. 가져오기
const username = localStorage.getItem("username");
const preferences = JSON.parse(localStorage.getItem("preferences"));

console.log(username);
console.log(preferences);

// 3. 데이터 삭제하기
localStorage.removeItem("username");
localStorage.clear();
