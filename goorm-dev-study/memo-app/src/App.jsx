import "./App.css";
import { useCallback, useState } from "react";
import SideBar from "./components/SideBar";
import MemoContainer from "./components/MemoContainer";
import localStorageSetItem from "./utils/storage";

function initMemosGetItem() {
  return JSON.parse(localStorage.getItem("memos")) || [];
}
function App() {
  const [memos, setMemos] = useState(initMemosGetItem);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const handleMemoChange = useCallback(
    (newMemo) => {
      setMemos((prevMemos) => {
        const newMemos = [...prevMemos]; // 오타 수정
        newMemos[selectedMemoIndex] = newMemo;
        localStorageSetItem("memos", newMemos); // 로컬 저장
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );
  const handleAddMemo = useCallback(() => {
    const now = new Date().getTime();
    const newMemo = {
      title: "Untitled",
      content: "",
      createAt: now,
      updateAt: now,
    };
    setMemos([...memos, newMemo]);
    setSelectedMemoIndex(memos.length);

    localStorageSetItem("memos", [...memos, newMemo]);
  }, [memos]);

  const hadleDeleteMemo = useCallback(
    (deleteMemoIndex) => {
      const newMemo = memos.filter((memo, index) => index !== deleteMemoIndex);
      setMemos(newMemo);

      localStorageSetItem("memos", newMemo);

      if (deleteMemoIndex === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      } else if (deleteMemoIndex < selectedMemoIndex) {
        setSelectedMemoIndex(selectedMemoIndex - 1);
      }
    },
    [memos, selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onAddMemo={handleAddMemo}
        onMemoDeleteClick={hadleDeleteMemo}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  );
}

export default App;
