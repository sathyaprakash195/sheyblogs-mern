import BlogForm from "../../components/BlogForm";

function AddBlog() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-gray-800">Add Blog</h1>
      <hr />

      <BlogForm />
    </div>
  );
}

export default AddBlog;
