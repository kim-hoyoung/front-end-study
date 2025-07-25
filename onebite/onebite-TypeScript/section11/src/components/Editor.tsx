import { ReactElement, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";
interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onCahngeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      {" "}
      <input value={text} onChange={onCahngeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
