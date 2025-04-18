// const res = await fetch("https://jsonplaceholder.typicode.com/comments");
// const data = await res.json();

// const sliceData = data.slice(0, 50);

// const ulEl = document.querySelector("ul");

// sliceData.forEach((element) => {
//   const li = document.createElement("li");
//   li.innerHTML = `<h3>${element.email}</h3><p class='name'>${element.name}</p><p>${element.body}</p>`;
//   ulEl.appendChild(li);
// });

const response = await fetch("https://jsonplaceholder.typicode.com/comments");

const data = await response.json();

const sliceData = data.slice(0, 50);

const ulEl = document.querySelector("ul");

sliceData.forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = `<h3>${element.email}</h3><p class='name'>${element.name}</p><p>${element.body}</p>`;
  ulEl.appendChild(li);
});
