import "../MemoItem/index.css";

const MemoItem = ({
  children,
  onMemoItemClick,
  isSelected,
  onMemoDeleteClick,
}) => {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onMemoItemClick}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onMemoDeleteClick}>
        x
      </button>
    </div>
  );
};

export default MemoItem;
