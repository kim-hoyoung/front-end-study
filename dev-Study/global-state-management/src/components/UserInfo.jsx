import { useUser } from "../hooks/useUser";

const UserInfo = () => {
  const { user, isAdult } = useUser();

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <p>{isAdult ? "성인입니다." : "미성년자입니다."}</p>
    </div>
  );
};

export default UserInfo;
