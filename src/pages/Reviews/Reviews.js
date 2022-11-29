import React, { useState } from "react";
import classes from "./Reviews.module.css";
import Reviews2 from "../Home/Reviews";
import Form from "../Home/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Media from "react-media";

SwiperCore.use([Autoplay]);

function Reviews() {
  const [reviews] = useState([
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
  ]);

  const [videos] = useState([
    {
      poster: "/images/Reviews/1.png",
      text: "Образ со смокингом",
    },
    {
      poster: "/images/Reviews/2.png",
      text: "Образ с красным смокингом и черным топом",
    },
    {
      poster: "/images/Reviews/3.png",
      text: "Синий костюм с брюками",
    },
    {
      poster: "/images/Reviews/4.png",
      text: "Образ с костюмом",
    },
  ]);

  return (
    <div className={classes.Reviews}>
      <div className="container">
        <h2>ОТЗЫВЫ</h2>
        <div className={classes.Reviews__top}>
          <Media query="(min-width:576px)">
            {(matches) =>
              matches ? (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  slidesPerGroup={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {videos.map((item, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                      <img src={item.poster} alt="" />
                      <p>{item.text}</p>
                      <div className={classes.play}>
                        <svg
                          width="58"
                          height="58"
                          viewBox="0 0 58 58"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="29" cy="29" r="29" fill="white" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M41.4071 28.4818C41.8538 28.2088 41.8538 27.5601 41.4071 27.2872L23.3726 16.2661C22.9062 15.981 22.3076 16.3167 22.3076 16.8634V38.9056C22.3076 39.4522 22.9062 39.7879 23.3726 39.5029L41.4071 28.4818Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className={classes.Carousel_Mobile}>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {videos.map((item, index) => (
                      <SwiperSlide key={index} className={classes.swiperSlide}>
                        <img src={item.poster} alt="" />
                        <p>{item.text}</p>
                        <div className={classes.play}>
                          <svg
                            width="58"
                            height="58"
                            viewBox="0 0 58 58"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="29" cy="29" r="29" fill="white" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M41.4071 28.4818C41.8538 28.2088 41.8538 27.5601 41.4071 27.2872L23.3726 16.2661C22.9062 15.981 22.3076 16.3167 22.3076 16.8634V38.9056C22.3076 39.4522 22.9062 39.7879 23.3726 39.5029L41.4071 28.4818Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )
            }
          </Media>
        </div>
      </div>
      <Reviews2 reviews={reviews} />
      <Form />
    </div>
  );
}

export default Reviews;
