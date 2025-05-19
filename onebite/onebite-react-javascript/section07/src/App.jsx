import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false); // 브라우저 오픈을 위해 초기값 false로 설정함

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);
  // 위의 [] 은 의존성 배열
  // dependency array
  // 줄여서 deps

  // 2. 업데이트 : 변화, 리렌더링 (deps 생략하면 됨)
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return; // 브라우저가 처음 열렸는지 확인하기 위한 작업.
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
