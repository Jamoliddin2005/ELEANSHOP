import React, { useState } from "react";
import Media from "react-media";
import classes from "./Showroom.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Showroom() {
  const [showRoom] = useState([
    {
      image: "/images/Home/photo_2021-03-01_12-42-51.png",
    },
    {
      image: "/images/Home/photo_2021-03-01_12-42-43 (2).png",
    },
    {
      image: "/images/Home/photo_2021-03-01_12-42-43.png",
    },
  ]);
  return (
    <div className={`${classes.Showroom} Showroom`}>
      <div className="container">
        <h2>НАШ ШОУРУМ</h2>
        <div className="row">
          {
            <Media query="(min-width:577px)">
              {(matches) =>
                matches ? (
                  showRoom.map((item, index) => (
                    <div className={classes.card} key={index}>
                      <img src={item.image} alt="" />
                    </div>
                  ))
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
                    {showRoom.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        className={classes.ShowroomSlide}
                      >
                        <div className={classes.card} key={index}>
                          <img src={item.image} alt="" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )
              }
            </Media>
          }
        </div>
      </div>
    </div>
  );
}

export default Showroom;
