import "./index.css";

export default function SideBarHeader({ closeSideBar, onSwitchSideBarClick }) {
  if (closeSideBar)
    return (
      <button
        className="SideBarHeader__open-button"
        onClick={onSwitchSideBarClick}
      >
        {`>>`}
      </button>
    );

  return (
    <div className="SideBarHeader">
      <h1>메모장</h1>
      <button
        className="SideBarHeader__close-button"
        onClick={onSwitchSideBarClick}
      >
        {`<<`}
      </button>
    </div>
  );
}
