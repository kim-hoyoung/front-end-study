import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useEffect, useState } from "react";
import { getPostById, updatePost } from "../apis/posts";

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then((response) => setPost(response));
  }, [id]);

  const handleUpdate = async (data) => {
    await updatePost(id, data).then((response) => console.log(response));

    navigate(`/posts/${id}`);
  };

  if (!post) return <div>...Loading</div>;
  return (
    <div>
      <h2>Edit Post Id : {id}</h2>
      <PostForm onSubmit={handleUpdate} initialValues={post} />
    </div>
  );
}
