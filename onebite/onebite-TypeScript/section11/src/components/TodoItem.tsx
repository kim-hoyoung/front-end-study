import { Todo } from "../types";

interface Props extends Todo {
  onClickDelte: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelte(props.id);
  };
  return (
    <div>
      {props.id} 번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
