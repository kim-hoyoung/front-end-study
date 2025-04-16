import SideBarFooter from "../SideBarFooter";
import SideBarHeader from "../SideBarHeader";
import MemoList from "../MemoList";
import "../SideBar/index.css";
import { useState } from "react";

const SideBar = ({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onAddMemo,
  onMemoDeleteClick,
}) => {
  const [closeSideBar, setCloseSideBar] = useState(false);

  const handleSwitchSideBarClick = () => {
    setCloseSideBar((prev) => !prev);
  };
  return (
    <div className={`SideBar ${closeSideBar ? "close" : ""}`}>
      <SideBarHeader
        closeSideBar={closeSideBar}
        onSwitchSideBarClick={handleSwitchSideBarClick}
      />

      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onMemoDeleteClick={onMemoDeleteClick}
      />
      <SideBarFooter onAddMemo={onAddMemo} />
    </div>
  );
};

export default SideBar;
