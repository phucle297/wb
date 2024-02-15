import { nanoid } from "@reduxjs/toolkit";
import Carousel from "@fe-user/components/carousel";
import clsx from "clsx";
import styles from "./home.module.css";
import ListBlogs from "@fe-user/components/list-blogs";

const renderDataInCarousel = () => {
  const data = [...new Array(5)].map((_, index) => (
    <div key={nanoid()}>
      <div
        className={clsx("relative", styles.carouselItem)}
        style={{
          backgroundImage: `url("/carousel${index + 1}.jpeg"),
          linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%)`,
        }}
      >
        <div className="z-1 relative flex h-[500px] items-center justify-center">
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
      <div className="h-screen">
        <Carousel data={renderDataInCarousel()} />
        <ListBlogs />
      </div>
    </div>
  );
};

export default Home;
