import { useState, useEffect } from "react";
import { deletePost, getAllPosts } from "../apis/posts";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    getAllPosts().then((response) => {
      console.log(response);
      setPosts(response);
    });
  }, []);

  async function handleDelete() {
    if (openModal === null) return;

    setIsDeleting(true);

    try {
      await deletePost(openModal);
      setPosts((prev) => prev.filter((p) => p.id !== openModal)); // ✅ === 비교
    } catch (err) {
      console.log("failed to delete post :", err);
    } finally {
      setIsDeleting(false);
      setOpenModal(null); // ✅ 모달 닫기
    }
  }

  return (
    <div>
      <h3>Posts List</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {" "}
            {/* key 빠졌을 수도 있으니까 추가 */}
            <Link to={`/posts/${post.id}`}>
              {post.id}.{post.title}
            </Link>
            <button onClick={() => setOpenModal(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {openModal &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <h3>Are you sure you want to delete id={openModal} post?</h3>
              <button onClick={handleDelete} disabled={isDeleting}>
                Yes
              </button>
              <button onClick={() => setOpenModal(null)} disabled={isDeleting}>
                No
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default PostList;
