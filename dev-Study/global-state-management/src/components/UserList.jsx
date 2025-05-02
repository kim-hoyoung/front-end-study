import { useUserList } from "../hooks/useUserList";

const UserList = () => {
  const { isLoading, isError, data, error } = useUserList();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {error}</p>;

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
