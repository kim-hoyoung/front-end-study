const board = {
  posts: [],

  addPost(content) {
    this.posts.push(content);
    console.log(`게시글 추가: ${content}`);
  },

  removePost(index) {
    if (index < 1 || index > this.posts.length) {
      console.log("삭제할 게시글이 없습니다.");
    }
    const removed = this.posts.splice(index - 1, 1);
    console.log(`삭제된 게시글: ${removed[0]}`);
  },
  showPosts() {
    console.log("현재 게시글 목록:");
    this.posts.forEach((post, idx) => {
      console.log(`${idx + 1}.${post}`);
    });
  },
};

// 실행 예시
board.addPost("오늘의 점심은 김치찌개!");
board.addPost("자바스크립트 공부 중 🖥️");

board.showPosts();
// 출력:
// 📌 현재 게시글 목록:
// 1. 오늘의 점심은 김치찌개!
// 2. 자바스크립트 공부 중 🖥️

board.removePost(4);

// 출력:
// 게시글 삭제: 오늘의 점심은 김치찌개!

board.showPosts();
// 출력:
// 📌 현재 게시글 목록:
// 1. 자바스크립트 공부 중 🖥️
