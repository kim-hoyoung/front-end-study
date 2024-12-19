function isPalindrome(word) {
  // 1. 문자열을 배열로 변환
  let reverseWord = word.split(""); // 문자열을 배열로 변환
  let normalWord = word.split(""); // 원래 문자열 배열 복사

  // 2. 배열 뒤집기
  reverseWord.reverse(); // reverse()를 사용해 뒤집기

  // 3. 문자열 비교
  if (normalWord.join("") === reverseWord.join("")) {
    return true; // 회문이면 true
  } else {
    return false; // 아니면 false
  }
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
