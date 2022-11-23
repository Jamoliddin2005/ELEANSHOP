import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import classes from "./HeaderSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeaderSlider.css";

SwiperCore.use([Autoplay]);

function HeaderSlider() {
  const [products, setProducts] = useState([
    {
      images: "/images/HeaderSlider/1.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/2.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/1.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/2.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/1.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/2.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
  ]);

  return (
    <div className={classes.HeaderSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className={classes.swiperSlide}>
            <img src={item.images} alt="" />
            <p>{item.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderSlider;
