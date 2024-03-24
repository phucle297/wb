import Title from "@wb/ui/src/components/title";
import BlogItem from "./components/blog-item";
import { Button } from "@wb/ui/src/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { TBlog } from "@wb/common/src/types/blogs";
import useCheckHomePage from "@fe-user/hooks/useCheckHomePage";
import LayoutBlog from "../layout/layout-blog";
import { useViewportSize } from "@mantine/hooks";
import { cn } from "@wb/ui/src/libs/utils";

interface IListBlogsProps {
  data: TBlog[];
}
const ListBlogs = ({ data }: IListBlogsProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePage = useCheckHomePage();
  return (
    <LayoutBlog>
      <div>
        <Title
          linePosition={isHomePage ? "left" : "center"}
          textPosition={isHomePage ? "left" : "center"}
          text="List Blogs"
        />

        <div
          className={cn("mt-10 grid gap-8 md:grid-cols-3 2xl:grid-cols-2", {
            ["md:grid-cols-4"]: pathname === "/",
          })}
        >
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
    </LayoutBlog>
  );
};

export default ListBlogs;
