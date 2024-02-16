import ListBlogs from "@fe-user/components/list-blogs";
import { BlogsMockData } from "@fe-user/mocks/blogs";

const Blogs = () => {
  return <ListBlogs data={BlogsMockData} />;
};

export default Blogs;
