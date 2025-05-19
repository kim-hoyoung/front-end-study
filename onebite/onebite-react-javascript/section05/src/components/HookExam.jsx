import { useState } from "react";
import useInput from "../hooks/useInput";

// 3가지 Hook 관련된 팀

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능.
// 함수 바깥에서 출력하면 오류가 발생해요
// const state = useState();

// 2. 조건부로 호출될 수는 없어요 if, for 등등

// 3. 나만의 훅 (Custtom Hook) 직접 만들 수 있다.

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  const state = useState();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
