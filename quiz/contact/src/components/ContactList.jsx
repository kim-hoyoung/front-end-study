import "./ContactList.css";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((data) => (
        <ContactItem key={data.id} {...data} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
