import Appbar from "../Components/Appbar";
import Blogcard from "../Components/Blogcard";
import useBlogs from "../hooks";
import Skeleton from "../Components/Skeleton";
// import Appbar from "../Components/Appbar";
const Blogs = () => {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </div>
    );
  }
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <Blogcard
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              description={blog.description}
              publisheddate={"20th May 2024"}
            ></Blogcard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
