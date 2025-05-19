import { useUser } from "../hooks/useUser";

const UserForm = () => {
  const { user, updateUser, resetUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUser(name, name === "age" ? Number(value) : value);
  };

  return (
    <div>
      <h2>사용자 입력 폼</h2>
      <input
        name="name"
        placeholder="이름 입력"
        value={user.name}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="나이 입력"
        type="number"
        value={user.age}
        onChange={handleChange}
      />
      <button onClick={resetUser}>초기화</button>
    </div>
  );
};

export default UserForm;
