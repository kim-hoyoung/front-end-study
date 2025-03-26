const board = {
  posts: [],
  addPost(content) {
    this.posts = push(content);
    console.log(`게시글 추가 : ${content}`);
  },
  showPosts() {},
  removePost() {},
};

// 실행 예시
board.addPost("오늘의 점심은 김치찌개!");
board.addPost("자바스크립트 공부 중 🖥️");

board.showPosts();
// 출력:
// 📌 현재 게시글 목록:
// 1. 오늘의 점심은 김치찌개!
// 2. 자바스크립트 공부 중 🖥️

board.removePost(1);
// 출력:
// 게시글 삭제: 오늘의 점심은 김치찌개!

board.showPosts();
// 출력:
// 📌 현재 게시글 목록:
// 1. 자바스크립트 공부 중 🖥️
