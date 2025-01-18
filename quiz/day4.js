// Quiz 1. 책 정보 확인하기

// 목표: 주어진 책 정보 객체에서 특정 속성이 존재하는지 확인하고, 그 결과를 출력합니다.

const book = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  // publishedYear 속성은 이 객체에는 없습니다.
};

if (book.publichedYear) {
  console.log(`출판년도는 ${출판년도}입니다.`);
} else {
  console.log("출판년도 정보가 없습니다.");
}

//or

if ("publichedYear" in book) {
  console.log(`출판년도는 ${출판년도}입니다.`);
} else {
  console.log("출판년도 정보가 없습니다.");
}
