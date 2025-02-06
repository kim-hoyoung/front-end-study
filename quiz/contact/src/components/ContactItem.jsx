import "./ContactItem.css";

const ContactItem = ({ id, name, contact, deleteContact }) => {
  const onClickDeleteButton = () => {
    deleteContact(id);
  };
  console.log(name, contact);
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
};

export default ContactItem;
