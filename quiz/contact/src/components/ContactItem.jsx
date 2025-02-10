import { ContactDispatchContext } from "../App";
import "./ContactItem.css";
import { memo, useContext } from "react";

const ContactItem = ({ id, name, contact }) => {
  const { deleteContact } = useContext(ContactDispatchContext);
  const onClickDeleteButton = () => {
    deleteContact(id);
  };
  console.log("이름: " + name, "연락처: " + contact);
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
};

export default memo(ContactItem);
