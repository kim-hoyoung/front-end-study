import MemoItem from "../MemoItem";
import "../MemoList/index.css";

const MemoList = ({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onMemoDeleteClick,
}) => {
  return (
    <div className="MemoList">
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onMemoItemClick={() => setSelectedMemoIndex(index)}
          isSelected={selectedMemoIndex === index}
          onMemoDeleteClick={(e) => {
            onMemoDeleteClick(index);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
