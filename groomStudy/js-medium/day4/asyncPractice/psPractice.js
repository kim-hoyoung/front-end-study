// 2번 문제

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log("유저 정보:", user);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((response) => response.json())
  .then((posts) => {
    console.log("유저의 게시글 목록:", posts);
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  });

async function getSpecificUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("유저 정보:", user);

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await response.json();

    console.log("유저의 게시글 목록:", posts);
  } catch (error) {
    console.error("에러발생:", error);
  }
}

// 3번 문제
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((comments) => {
    console.log("모든 댓글 목록:", comments);
    return fetch(
      `https://jsonplaceholder.typicode.com/comments/${comments[0].id}`
    );
  })
  .then((response) => response.json())
  .then((comment) => {
    console.log("첫 번째 댓글 정보:", comment);
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  });

async function sequentially() {
  try {
    const commentsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const comments = await commentsResponse.json();

    console.log("모든 댓글 목록:", comments);

    const fstCommentResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${comments[0].id}`
    );
    const comment = await fstCommentResponse.json();

    console.log("첫 번째 댓글 정보:", comment);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

// 4번 문제

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((todo) => {
    console.log("할 일 정보:", todo);
    return fetch("https://jsonplaceholder.typicode.com/albums/1");
  })
  .then((response) => response.json())
  .then((album) => {
    console.log("앨범 정보:", album);
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  });

async function promiseChaining() {
  try {
    const todoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todo = await todoResponse.json();

    console.log("할 일 정보:", todo);

    const albumResponse = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1"
    );
    const album = await albumResponse.json();

    console.log("앨범 정보:", album);
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

// Promise chaining 방식
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

async function promiseChaining1() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}
