import PostButtonList from "../components/PostButtonList";
import PostScrollList from "../components/PostScrollList";

export default function PostListPage() {
  return (
    <div className="flex h-screen">
      {/* 왼쪽: 스크롤 기반 무한 스크롤 */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-300 p-4">
        <h2 className="text-2xl font-bold mb-4">스크롤 기반 무한 스크롤</h2>
        <PostScrollList />
      </div>

      {/* 오른쪽: 버튼 기반 무한 스크롤 */}
      <div className="w-1/2 h-full overflow-y-auto p-4">
        <h2 className="text-2xl font-bold mb-4">버튼 기반 무한 스크롤</h2>
        <PostButtonList />
      </div>
    </div>
  );
}
