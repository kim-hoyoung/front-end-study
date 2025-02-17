import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)

export default memo(TodoItem, (prevPorps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 x
  // F -> Props 바뀜 -> 리렌더링 o
  // 잘 기억하자
  //   if (prevPorps.id !== nextProps.id) return false;
  //   if (prevPorps.isDone !== nextProps.isDone) return false;
  //   if (prevPorps.content !== nextProps.content) return false;
  //   if (prevPorps.date !== nextProps.date) return false;
  //   return true;
});

//export default memo(TodoItem);
