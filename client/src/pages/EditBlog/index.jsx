import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import BlogForm from "../../components/BlogForm";
import Loader from "../../components/Loader";

function EditBlog() {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {loading && <Loader />}
      <h1 className="text-2xl font-bold text-gray-800">Edit Blog</h1>
      <hr />

      <BlogForm blogData={blog} />
    </div>
  );
}

export default EditBlog;
