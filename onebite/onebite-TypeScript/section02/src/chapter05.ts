// Enum 타입 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0, // 숫자 직접 할당 안해도 맨 위에 있는 것 부터 0번이 부여됨 그리고 그 아래는 +1 이 된다.
  USER = 1, // 중간부터 숫자를 지정하게 되면 지정된 숫자부터 아래로 +1 된다.
  GUEST = 2, // 이런 Enum을 숫자형 Enum이라고 부른다.
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "홍길동",
  role: Role.ADMIN, // 0 <- 관리자
  Language: Language.korean,
};
const user2 = {
  name: "청길동",
  role: Role.USER, // 0 <- 일반 유저
  Language: Language.english,
};
const user3 = {
  name: "흑길동",
  role: Role.GUEST, // 0 <- 게스트
};

console.log(user1, user2, user3);
