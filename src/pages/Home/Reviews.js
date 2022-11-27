import React, { useState } from "react";
import classes from "./reviews.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./review.css";
import { Link } from "react-router-dom";
import Media from "react-media";

SwiperCore.use([Autoplay]);

function Reviews({ reviews, home }) {
  const [comments, setComments] = useState([
    {
      image: "/images/Home/comment.png",
      name: "Ирина",
      country: "г. Москва",
      data: "26 Марта 2017",
      p: "Да, доставка заграницу осуществляется курьерской службой до  двери. Доставка заграницу оплачивается при оформлении заказа,  фиксированная стоимость 1 200₽.",
    },
    {
      image: "/images/Home/comment.png",
      name: "Ирина",
      country: "г. Москва",
      data: "26 Марта 2017",
      p: "Да, доставка заграницу осуществляется курьерской службой до  двери. Доставка заграницу оплачивается при оформлении заказа,  фиксированная стоимость 1 200₽.",
    },
    {
      image: "/images/Home/comment.png",
      name: "Ирина",
      country: "г. Москва",
      data: "26 Марта 2017",
      p: "Да, доставка заграницу осуществляется курьерской службой до  двери. Доставка заграницу оплачивается при оформлении заказа,  фиксированная стоимость 1 200₽.",
    },
    {
      image: "/images/Home/Slice 3.png",
      name: "Ирина",
      country: "г. Москва",
      data: "26 Марта 2017",
      p: "Да, доставка заграницу осуществляется курьерской службой до  двери. Доставка заграницу оплачивается при оформлении заказа,  фиксированная стоимость 1 200₽.",
    },
  ]);

  return (
    <div className={`${classes.Reviews} Reviews`}>
      {home ? (
        <h2>НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ И ОТЗЫВЫ</h2>
      ) : (
        <h2>НАШИ ЗВЕЗДНЫЕ КЛИЕНТЫ</h2>
      )}

      <div className={`${classes.container} container`}>
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
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {reviews.map((item, index) => (
                  <SwiperSlide key={index} className={classes.swiperSlide}>
                    <img src={item.images} alt="" />
                    <p>{item.text}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className={classes.Carousel_Mobile}>
                <Swiper
                  slidesPerView={1.4}
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
                  {reviews.map((item, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                      <img src={item.images} alt="" />
                      <p>{item.text}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )
          }
        </Media>

        <div className={classes.Comments}>
          {comments.map((item, index) => (
            <div className={classes.Comment} key={index}>
              <div className={classes.Comment_Top}>
                <div className={classes.comment_top_left}>
                  <img src={item.image} alt="" />
                  <Link to={"/"}>
                    <span>{item.name}</span> {item.country}
                  </Link>
                </div>
                <div className={classes.comment_top_right}>
                  <p>{item.data}</p>
                </div>
              </div>
              <div className={classes.CommentBottom}>
                <p>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
        <button>СМОТРЕТЬ ВСЕ</button>
      </div>
    </div>
  );
}

export default Reviews;
