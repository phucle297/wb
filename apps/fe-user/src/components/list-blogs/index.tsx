import { BlogsMockData } from "@fe-user/mocks/blogs";
import Title from "@wb/ui/src/components/title";
import BlogItem from "./components/blog-item";
import { Button } from "@wb/ui/src/components/ui/button";
import { useNavigate } from "react-router-dom";

const ListBlogs = () => {
  const navigate = useNavigate();
  const data = BlogsMockData;
  return (
    <div className="container py-10">
      <Title linePosition="left" textPosition="left" text="List Blogs" />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {data.map((blog) => {
          return <BlogItem key={blog._id} blog={blog} />;
        })}
      </div>

      <Button
        className="mx-auto mt-10 block px-10"
        onClick={() => {
          navigate("/blogs");
        }}
      >
        Xem thêm
      </Button>
    </div>
  );
};

export default ListBlogs;
