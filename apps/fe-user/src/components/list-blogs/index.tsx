import Title from "@wb/ui/src/components/title";
import BlogItem from "./components/blog-item";
import { Button } from "@wb/ui/src/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TBlog } from "@wb/common/src/types/blogs";
import useCheckHomePage from "@fe-user/hooks/useCheckHomePage";

interface IListBlogsProps {
  data: TBlog[];
}
const ListBlogs = ({ data }: IListBlogsProps) => {
  const navigate = useNavigate();

  const isHomePage = useCheckHomePage();
  return (
    <div className="container py-10">
      <Title
        linePosition={isHomePage ? "left" : "center"}
        textPosition={isHomePage ? "left" : "center"}
        text="List Blogs"
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {data.map((blog) => {
          return <BlogItem key={blog._id} blog={blog} />;
        })}
      </div>
      {isHomePage && (
        <Button
          className="mx-auto mt-10 block px-10"
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Xem thêm
        </Button>
      )}
    </div>
  );
};

export default ListBlogs;
