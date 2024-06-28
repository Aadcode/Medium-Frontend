import Fullblog from "../Components/fullblog";
import useBlog from "../hooks/blogid";
import { useParams } from "react-router-dom";
import { Spinner } from "../Components/spinner";

const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div className="h-screen flex flex-col justify-center">
        <div className="w-screen flex justify-center">
          <Spinner></Spinner>
        </div>
      </div>
    );
  }

  return <Fullblog blog={blog} />;
};

export default Blog;
