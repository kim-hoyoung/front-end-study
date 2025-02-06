import "./App.css";
import { useRef, useReducer } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const addContact = (name, contact) => {
    dispatch({
      type: "ADD",
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
      },
    });
  };

  const deleteContact = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor addContact={addContact} />
      </section>
      <section>
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </section>
    </div>
  );
}

export default App;
