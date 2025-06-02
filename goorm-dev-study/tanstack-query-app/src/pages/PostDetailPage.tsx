import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail";

export default function PostDetailPage() {
  const { id } = useParams();

  // id! : "id가 무조건 null이나 undefined가 아니다"라고 컴파일러에게 알려줍니다.
  // 하지만 실제로는 undefined일 수도 있으니, 항상 안전하지는 않을 수 있으니 남용 금물.
  // parseInt : 문자열을 정수로 바꿔주는 자바스크립트 내장 함수입니다.
  // 첫 번째 인자: 변환할 문자열 (id!)
  // 두 번째 인자: 진수(여기서는 10진수)
  // 따라서 아래 코드는 URL 파라미터로 전달받은 문자열 id를 10진수 정수(postId)로 변환하는 코드
  const postId = parseInt(id!, 10);

  if (isNaN(postId)) return <p>유효하지 않은 게시글 ID입니다.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <PostDetail postId={postId} />
    </div>
  );
}
