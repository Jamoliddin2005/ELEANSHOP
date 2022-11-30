import React, { useState } from "react";
import Media from "react-media";
import classes from "./Fitting.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);

function Fitting() {
  const [reviews] = useState([
    {
      image: "/images/Reviews/1.png",
    },
    {
      image: "/images/Reviews/2.png",
    },
    {
      image: "/images/Reviews/3.png",
    },
    {
      image: "/images/Reviews/4.png",
    },
  ]);

  return (
    <div className={classes.fitting}>
      <h2>ПРИМЕРКА</h2>
      <div className="container">
        <div className={classes.left}>
          <div className={classes.fitting_card}>
            <div className={classes.fitting_card_top}>
              <ul>
                <h5>ПО МОСКВЕ</h5>
                <li>
                  <span></span>
                  <p>
                    Вы можете примерить и подобрать желанный образ изделий в
                    нашем шоуруме.
                  </p>
                </li>
                <li>
                  <span></span>
                  <p>
                    В удобное место и время можно заказать примерку со стилистом
                    бренда, подобрать желанный образ и получить индивидуальные
                    рекомендации. Примерка может занимать до 2-х часов.
                  </p>
                </li>
                <li>
                  <span></span>
                  <p>
                    Также можно заказать доставку с возможностью примерки перед
                    покупкой, в течение 15-ти минут.
                  </p>
                </li>
              </ul>
              <ul>
                <h5>ПО РОССИИ</h5>
                <li>
                  <span></span>
                  <p>
                    Заказы по России отправляются по полной предоплате на сайте
                    картой любого банка, без комиссии.
                  </p>
                </li>
                <li>
                  <span></span>
                  <p>
                    Можно сделать доставку с возможностью примерки в течение
                    15-ти минут, об этом нужно сообщить менеджеру при
                    подтверждении заказа. Если изделие Вам не подходит, Вы
                    можете сразу же его отдать курьеру. Затем связаться с нами
                    по телефону 8 495 150 14 77, чтобы оформить обмен или
                    возврат. Подробнее здесь (ссылка на страницу обмен и
                    возврат)
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.size_table}>
              <h4>ТАБЛИЦА РАЗМЕРОВ</h4>
              <div className={classes.top_size}>
                <span>Размеры</span>
                <span>Грудь</span>
                <span>Талия</span>
                <span>Бедра</span>
                <span>Рукав</span>
              </div>
              <div className={classes.size}>
                <span>
                  40 <span>XS</span>
                </span>
                <span>80</span>
                <span>60</span>
                <span>88</span>
                <span>40</span>
              </div>
              <div className={classes.size}>
                <span>
                  40 <span>XS</span>
                </span>
                <span>80</span>
                <span>60</span>
                <span>88</span>
                <span>40</span>
              </div>
              <div className={classes.size}>
                <span>
                  40 <span>XS</span>
                </span>
                <span>80</span>
                <span>60</span>
                <span>88</span>
                <span>40</span>
              </div>
              <div className={classes.size}>
                <span>
                  40 <span>XS</span>
                </span>
                <span>80</span>
                <span>60</span>
                <span>88</span>
                <span>40</span>
              </div>
              <div className={classes.size}>
                <span>
                  40 <span>XS</span>
                </span>
                <span>80</span>
                <span>60</span>
                <span>88</span>
                <span>40</span>
              </div>
            </div>
            <div className={classes.fitting_swiper}>
              <h4>ВИДЕО ПРИМЕРОК</h4>
              <Media query="(min-width:576px)">
                {(matches) =>
                  matches ? (
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={10}
                      slidesPerGroup={1}
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
                      {reviews.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className={classes.swiperSlide}
                        >
                          <div className={classes.player}>
                            <svg
                              width="42"
                              height="42"
                              viewBox="0 0 42 42"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="21" cy="21" r="21" fill="white" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M29.7154 20.7886C30.162 20.5156 30.162 19.8669 29.7154 19.594L17.2193 11.9575C16.7529 11.6724 16.1543 12.0081 16.1543 12.5548V27.8277C16.1543 28.3744 16.7529 28.7101 17.2193 28.425L29.7154 20.7886Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <img src={item.image} alt="" />
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
                        {reviews.map((item, index) => (
                          <SwiperSlide
                            key={index}
                            className={classes.swiperSlide}
                          >
                          <div className={classes.player}>
                            <svg
                              width="42"
                              height="42"
                              viewBox="0 0 42 42"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="21" cy="21" r="21" fill="white" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M29.7154 20.7886C30.162 20.5156 30.162 19.8669 29.7154 19.594L17.2193 11.9575C16.7529 11.6724 16.1543 12.0081 16.1543 12.5548V27.8277C16.1543 28.3744 16.7529 28.7101 17.2193 28.425L29.7154 20.7886Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <img src={item.image} alt="" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )
                }
              </Media>
            </div>
            <div className={classes.fitting_form}>
              <div className={classes.fitting_form_top}>
                <h4>ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h4>
                <svg
                  width="33"
                  height="37"
                  viewBox="0 0 33 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1504 3.26676C14.1504 2.01476 15.1653 1 16.4172 1C17.6691 1 18.6841 2.01495 18.6841 3.26676C18.6841 3.9119 18.403 4.49398 17.9822 4.90687C17.5662 5.29518 16.4998 5.64261 16.4998 7.4656"
                    stroke="#C0A78F"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.4775 11.4637L16.5223 7.4668L4.53223 11.4637"
                    stroke="#C0A78F"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.08203 10.5723C3.08203 10.5723 7.04974 13.8741 16.523 13.8741C25.9961 13.8741 29.9392 10.5723 29.9392 10.5723"
                    stroke="#C0A78F"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.12845 10.5352C1.90548 12.6462 1.196 14.7284 1 16.7815L4.35733 18.5567L6.02481 17.2213C6.02481 17.2213 9.68465 19.7486 9.36107 26.4052C9.03748 33.0619 9.66967 34.3782 9.66967 34.3782C10.6177 35.0474 16.4994 35.2397 16.4994 35.2397C16.4994 35.2397 22.3823 35.0474 23.3303 34.3782C23.3303 34.3782 23.9625 33.0619 23.6389 26.4052C23.3153 19.7486 26.6488 17.2213 26.6488 17.2213L28.6427 18.5567L32 16.7815C31.804 14.7283 31.0945 12.6462 29.8717 10.5352"
                    stroke="#C0A78F"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5006 20.095C16.8241 20.095 17.0862 19.8328 17.0862 19.5094C17.0862 19.186 16.8241 18.9238 16.5006 18.9238C16.1772 18.9238 15.915 19.186 15.915 19.5094C15.915 19.8328 16.1772 20.095 16.5006 20.095Z"
                    stroke="#C0A78F"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5006 24.2142C16.8241 24.2142 17.0862 23.952 17.0862 23.6286C17.0862 23.3051 16.8241 23.043 16.5006 23.043C16.1772 23.043 15.915 23.3051 15.915 23.6286C15.915 23.952 16.1772 24.2142 16.5006 24.2142Z"
                    stroke="#C0A78F"
                    strokeWidth="2"
                    strokeMiterlimit="3.8637"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <form action="">
                <div className={classes.top_inputs}>
                  <input type="text" name="" id="" placeholder="ВВЕДИТЕ ИМЯ" />
                  <span>*</span>
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="ВВЕДИТЕ ТЕЛЕФОН"
                  />

                  <span>*</span>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  className={classes.time_input}
                  placeholder="ВВЕДИТЕ УДОБНОЕ ВРЕМЯ"
                />
                <span>*</span>
                <div className={classes.bottom_inputs}>
                  <textarea
                    name=""
                    id=""
                    placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
                  ></textarea>
                  <button>ЗАПИСАТЬСЯ</button>
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitting;
