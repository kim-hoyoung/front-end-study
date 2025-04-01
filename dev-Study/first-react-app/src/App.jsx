import { useState } from "react";
import "./App.css";

const ID = "mandoo";
const PW = "mandoo123";

export default function App() {
  const [login, setLogin] = useState({ id: "", pw: "" });

  const handleIdChanged = (e) => {
    setLogin((prev) => ({ ...prev, id: e.target.value }));
  };

  const handlePwChanged = (e) => {
    setLogin((prev) => ({ ...prev, pw: e.target.value }));
  };

  const handleLoginClicked = () => {
    if (login.id === ID && login.pw === PW) {
      alert("로그인 성공!");
      setLogin({ id: "", pw: "" });
    } else {
      alert("로그인 실패하였습니다.");
    }
  };

  return (
    <main>
      <input
        className="loginInput"
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={handleIdChanged}
        value={login.id}
      />
      <input
        className="loginInput"
        type="text"
        placeholder="비밀번호를 입력하세요"
        onChange={handlePwChanged}
        value={login.pw}
      />
      <button onClick={handleLoginClicked}>Login</button>
    </main>
  );
}
