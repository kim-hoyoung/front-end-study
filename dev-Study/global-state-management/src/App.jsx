import ThemeToggle from "./components/ThemeToggle";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import UserList from "./components/UserList";
import "./styles/theme.css";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2> Recoil project</h2>
      <ThemeToggle />
      <UserForm />
      <UserInfo />
      <hr />
      <UserList />
      <hr />
    </div>
  );
}
