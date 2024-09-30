import { PostForm } from "./PostForm";

const CreatePosts = () => {
  return (
    <div>
      <h2 className="mt-4 text-2xl font-bold">New posts</h2>

      <p className="mb-7 mt-5">Create yout post</p>

      <PostForm />
    </div>
  );
};

export default CreatePosts;
