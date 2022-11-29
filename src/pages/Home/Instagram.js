import React, { useState } from "react";
import Media from "react-media";
import classes from "./Instagram.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Instagram() {
  const [profile] = useState([
    {
      image: "/images/Home/IMG_4223 2.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4226 1.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4227 1.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4234 1.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4222 3.png",
      profile: "/images/Home/profile.png",
    },
  ]);
  return (
    <div className={classes.Instagram_classes}>
      <div className="container">
        <h2>мы в Инстаграм</h2>
        <Media query="(min-width:576px)">
          {(matches) =>
            matches ? (
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                slidesPerGroup={5}
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
                {profile.map((item, index) => (
                  <SwiperSlide key={index} className={classes.swiperSlide}>
                    <div className={classes.profile_account} key={index}>
                      <img src={item.image} alt="" />
                      <img src={item.profile} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className={`${classes.Carousel_Mobile} Carousel_Mobile`}>
                <Swiper
                  slidesPerView={1.3}
                  spaceBetween={10}
                  slidesPerGroup={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {profile.map((item, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                      <div className={classes.profile_account} key={index}>
                        <img src={item.image} alt="" />
                        <img src={item.profile} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )
          }
        </Media>
        <div className={classes.instagram_blog}></div>
      </div>
    </div>
  );
}

export default Instagram;
