import Types from "@fe-user/pages/(routes)/short-reviews/components/types";
import { useViewportSize } from "@mantine/hooks";
import { TBlog } from "@wb/common/src/types/blogs";
import { ScrollArea } from "@wb/ui/src/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

type Props = {
  blog: TBlog;
};

const BlogItem = ({ blog }: Props) => {
  const { width } = useViewportSize();
  const navigate = useNavigate();
  if (!blog) return null;

  return (
    <button
      className="grid grid-cols-1 grid-rows-[1fr_auto] items-start overflow-hidden rounded-lg border-2 bg-[hsl(var(--popover))] text-left 2xl:grid-cols-[250px_1fr]"
      onClick={() => {
        navigate(`/blogs/${blog._id}`);
      }}
    >
      <img
        src={blog.thumbnail}
        loading="lazy"
        alt="thumbnail"
        className="block h-48 w-full object-cover md:h-32 xl:h-48 2xl:h-full"
      />

      <div className=" p-4">
        <h3 className="mb-1.5 line-clamp-2 text-xl font-bold 2xl:mb-3">{blog.title}</h3>
        <p className="mb-2 line-clamp-3 text-sm leading-4 opacity-70 2xl:mb-4">{blog.description}</p>
        <div className="-mb-3">
          <ScrollArea orientation="horizontal" className="pb-3">
            <Types noWrap={width <= 1440} types={blog.tags as string[]} />
          </ScrollArea>
        </div>
      </div>
    </button>
  );
};

export default BlogItem;
