import Carousel from "@fe-user/components/carousel";
import ListBlogs from "@fe-user/components/list-blogs";
import { BlogsMockData } from "@fe-user/mocks/blogs";
import { nanoid } from "@reduxjs/toolkit";

const renderDataInCarousel = () => {
  const data = [...new Array(5)].map((_, index) => (
    <div key={nanoid()}>
      <div
        className={"relative"}
        style={{
          backgroundImage: `url("/carousel${index + 1}.jpeg"),
          linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="z-1 relative flex h-[400px] items-center justify-center">
          <h1 className="text-2xl">Post {index + 1}: Lorem ipsum dolor sit.</h1>
        </div>
      </div>
    </div>
  ));
  return data;
};

const Home = () => {
  return (
    <div className="relative z-10">
      <div className="min-h-screen">
        <Carousel data={renderDataInCarousel()} />
        <ListBlogs data={BlogsMockData} />
      </div>
    </div>
  );
};

export default Home;
