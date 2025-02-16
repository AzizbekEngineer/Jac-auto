import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./hero.scss";

import img1 from "../../assets/images/hero1.png";
import img2 from "../../assets/images/hero2.png";
import img3 from "../../assets/images/hero3.png";
import img4 from "../../assets/images/hero4.png";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide
          className="hero__slide"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        >
          <div data-aos="fade-right" className="hero__info">
            <h2>Стиль в каждой детали</h2>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="hero__slide"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        >
          <div data-aos="fade-right" className="hero__info">
            <h2>Стиль в каждой детали</h2>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="hero__slide"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        >
          <div data-aos="fade-right" className="hero__info">
            <h2>Стиль в каждой детали</h2>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="hero__slide"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundRepeat: "no-repeat",
            height: "600px",
          }}
        >
          <div className="hero__info">
            <h2>Стиль в каждой детали</h2>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
