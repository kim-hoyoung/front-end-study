const getTodoList = async () => {
  try {
    const response = await fetch(
      // 아래 주소를 일부러 틀리게 변경해보세요.
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    const todoList = document.querySelector(".todo-list");

    todoList.innerHTML = `
    <div class="todo-item">
      <h2>내용: ${json.title}</h2>
      <p>완료 여부: ${json.completed ? "완료" : "미완료"}</p>
    </div>
    `;
  } catch (error) {
    console.log(error);
    // 에러가 나면 여기 코드가 실행됩니다. 에러를 잡고 무언가 할 수 있죠
    const body = document.querySelector("body");
    body.innerHTML = `
    <h4>에러가 발생했어요! 잠시 후에 다시 도전해보세요!</h4>
    `;
  }
};

getTodoList();

function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log("JSON 파싱 성공:", data);
    return data;
  } catch (error) {
    console.log("잘못된 JSON 데이터입니다.");
  } finally {
    console.log("데이터 파싱시도 완료");
  }
}

function login(username, password) {
  try {
    if (username !== data.username) {
      console.log("사용자를 찾을 수 없습니다.");
    }
    if (password !== data.password) {
      console.log("비밀번호가 틀렸습니다.");
    }
    console.log("로그인 성공!");
  } catch (error) {
  } finally {
    console.log("로그인 시도 완료");
  }
}
