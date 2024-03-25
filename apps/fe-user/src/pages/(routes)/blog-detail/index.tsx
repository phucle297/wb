import { default as BlogDetailImg } from "@fe-user/assets/blog-detail.jpg";
import { htmlMockContent } from "@fe-user/mocks/frieren";
import { Anchor, Breadcrumbs } from "@mantine/core";
import { cn } from "@wb/ui/src/libs/utils";
const items = [
  { title: "List blogs", href: "/blogs" },
  { title: "Blog detail", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));
const BlogDetail = () => {
  const mockHtmlData = htmlMockContent;
  return (
    <div>
      <img src={BlogDetailImg} alt="" className="h-[35vh] w-full object-cover" />
      <div className={cn("container max-w-[800px] py-10")}>
        <Breadcrumbs
          classNames={{
            breadcrumb: "text-[hsl(var(--foreground))]",
          }}
        >
          {items}
        </Breadcrumbs>

        <div className="content">
          <div
            dangerouslySetInnerHTML={{
              __html: mockHtmlData,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
