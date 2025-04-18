fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log("유저 목록:", users);
  })
  .catch((error) => {
    console.error("에러 발생:", error);
  });

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.error(error);
  }
}
