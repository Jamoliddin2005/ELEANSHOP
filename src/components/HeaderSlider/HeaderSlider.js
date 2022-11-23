import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

SwiperCore.use([Autoplay]);

function HeaderSlider() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1} className="mySwiper">
        <SwiperSlide>
          <h1>AS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>AS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>AS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>AS</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSlider;
