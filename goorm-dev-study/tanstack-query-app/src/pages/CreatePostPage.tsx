import PostEditor from "../components/PostEditor";

export default function CreatePostPage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">게시글 작성</h1>
      <PostEditor />
    </div>
  );
}
