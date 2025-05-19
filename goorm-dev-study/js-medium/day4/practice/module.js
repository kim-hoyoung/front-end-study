// 아래 Promise chaining 방식을 async, await로 작성하세요

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

{
  /* <script defer type="module"></script>; */
}
// async, await 방식으로 작성...
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

const data = await response.json();
console.log(data);

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const reponse1 = await fetch("https://jsonplaceholder.typicode.com/comments");
const data1 = reponse1.json();

console.log(data1);
