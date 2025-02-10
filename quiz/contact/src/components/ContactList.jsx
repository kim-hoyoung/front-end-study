import "./ContactList.css";
import ContactItem from "./ContactItem";
import { memo, useRef, useEffect } from "react";

const ContactList = ({ contacts, deleteContact }) => {
  const countList = useRef(0);
  const isFirstRender = useRef(false); // 첫 렌더링 여부를 추적

  useEffect(() => {
    if (!isFirstRender.current) {
      isFirstRender.current = true; // 첫 렌더링 후 true로 변경
      return;
    }
    countList.current++;
    console.log(countList.current + " List 렌더링 확인");
  });
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((data) => (
        <ContactItem key={data.id} {...data} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default memo(ContactList);
