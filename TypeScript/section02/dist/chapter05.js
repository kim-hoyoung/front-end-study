// Enum 타입 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
