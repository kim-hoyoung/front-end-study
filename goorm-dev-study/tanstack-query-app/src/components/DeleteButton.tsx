// components/DeleteButton.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/posts";
import { useNavigate } from "react-router-dom";

type Props = {
  postId: number;
};

export default function DeleteButton({ postId }: Props) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("삭제되었습니다.");
      navigate("/");
    },
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      삭제
    </button>
  );
}
