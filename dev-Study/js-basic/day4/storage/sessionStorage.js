// 1. 데이터 저장하기
sessionStorage.setItem("username", "김철수");
sessionStorage.setItem("isLoggedIn", "true");
sessionStorage.setItem(
  "userPrefs",
  JSON.stringify({
    theme: "dark",
    language: "ko",
  })
);

// 2. 데이터 가져오기
const username = sessionStorage.getItem("username");
const isLoggedIn = sessionStorage.getItem("isLoggedIn");
const userPrefs = JSON.parse(sessionStorage.getItem("userPrefs"));

console.log(username);
console.log(isLoggedIn);
console.log(userPrefs);

// 3. 특정 데이터 삭제하기
sessionStorage.removeItem("username");

// 4. 모든 데이터 삭제하기
sessionStorage.clear();
