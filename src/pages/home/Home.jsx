import React from "react";
import HoverImage from "../../components/hoverImg/HoverImg";
import Product from "../../components/product/Product";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import Image from "../../components/image/Image";
import Video from "../../components/video/Video";

const Home = () => {
  return (
    <div>
      <Video />
      <Hero />
      <Product />
      <Info />
      <Image />
    </div>
  );
};

export default Home;
