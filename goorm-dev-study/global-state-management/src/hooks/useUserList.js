import { useRecoilValueLoadable } from "recoil";
import { usersSelector } from "../recoil/userListSelector";

export function useUserList() {
  const usersLoadable = useRecoilValueLoadable(usersSelector);

  const isLoading = usersLoadable.state === "loading";
  const isError = usersLoadable.contents.status === "error";
  const data = usersLoadable.contents.data || [];
  const error = usersLoadable.contents.error;

  return { isLoading, isError, data, error };
}
