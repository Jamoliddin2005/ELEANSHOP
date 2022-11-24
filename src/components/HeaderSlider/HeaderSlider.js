import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import classes from "./HeaderSlider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeaderSlider.css";
import Media from "react-media";

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
  const [productsMobile, setProductsMobile] = useState([
    {
      images: "/images/HeaderSlider/mobile_slider.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/mobile_aksii.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/mobile_slider.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
    {
      images: "/images/HeaderSlider/mobile_aksii.png",
      text: "ЯРКИЕ КОМПЛЕКТЫ НА ВЕЧЕРНИЕ МЕРОПРИЯТИЯ",
    },
  ]);

  return (
    <div className={classes.HeaderSlider}>
      <Media query="(min-width:577px)">
        {(matches) =>
          matches ? (
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
                  <div className={`${classes.containerSlider} container`}>
                    <p>{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
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
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {productsMobile.map((item, index) => (
                <SwiperSlide key={index} className={classes.swiperSlide}>
                  <img src={item.images} alt="" />
                  <div className={`${classes.containerSlider} container`}>
                    <p>{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )
        }
      </Media>
    </div>
  );
}

export default HeaderSlider;
