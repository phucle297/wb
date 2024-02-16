import Types from "@fe-user/pages/(routes)/short-reviews/components/types";
import { TBlog } from "@wb/common/src/types/blogs";
import { useNavigate } from "react-router-dom";

type Props = {
  blog: TBlog;
};

const BlogItem = ({ blog }: Props) => {
  const navigate = useNavigate();
  if (!blog) return null;

  return (
    <div
      className="grid cursor-pointer grid-cols-[250px_1fr] items-center gap-5 rounded-lg border-2 bg-[hsl(var(--popover))] "
      aria-hidden
      onClick={() => {
        navigate(`/blogs/${blog._id}`);
      }}
    >
      <img src={blog.thumbnail} alt="thumbnail" className="block h-48 w-[250px]" />

      <div>
        <h3 className="mb-1.5 text-2xl font-bold">{blog.title}</h3>
        <p className="mb-2 text-sm leading-4 opacity-70">{blog.description}</p>
        <Types types={blog.tags as string[]} />
      </div>
    </div>
  );
};

export default BlogItem;
