import React, { useState } from "react";
import classes from "./More.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Media from "react-media";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const data = [
  {
    title: "ПАРАМЕТРЫ",
    content: [
      {
        content: "ПАРАМЕТРЫ 1",
      },
      {
        content: "ПАРАМЕТРЫ 2",
      },
      {
        content: "ПАРАМЕТРЫ 3",
      },
    ],
  },
  {
    title: "ДОПОЛНИТЕЛЬНО",
    content: [
      {
        content: "ДОПОЛНИТЕЛЬНО 1",
      },
      {
        content: "ДОПОЛНИТЕЛЬНО 2",
      },
      {
        content: "ДОПОЛНИТЕЛЬНО 3",
      },
    ],
  },
];

function More() {
  const [activePhoto, setActivePhoto] = useState(
    "/images/HeaderSlider/10 сбоку 2.png"
  );

  const [lists, setLists] = useState([
    { images: "/images/HeaderSlider/10 сбоку 2.png" },
    { images: "/images/HeaderSlider/10сбоку2 2.png" },
    { images: "/images/HeaderSlider/mobile_aksii.png" },
    { images: "/images/HeaderSlider/mobile_slider.png" },
  ]);

  const [profile, setProfile] = useState([
    {
      image: "/images/Catalog/first_3.png",
      name: "/ Платье-смокинг длинное",
      price: "24 900 ₽",
    },
    {
      image: "/images/Catalog/two_3.png",
      name: "/ Платье-смокинг длинное",
      price: "24 900 ₽",
    },
    {
      image: "/images/Catalog/three_3.png",
      name: "/ Платье-смокинг длинное",
      price: "24 900 ₽",
    },
    {
      image: "/images/Catalog/four_4.png",
      name: "/ Платье-смокинг длинное",
      price: "24 900 ₽",
    },
  ]);

  return (
    <div className={classes.more}>
      <main>
        <div className={`${classes.container} container`}>
          <div className={`${classes.row} row`}>
            <Media query="(min-width:576px)">
              {(matches) =>
                matches ? (
                  <>
                    <div className={classes.main_left}>
                      <div className={classes.main_left_lists}>
                        {lists.map((item, index) => (
                          <div
                            className={`${classes.item} ${
                              activePhoto === item.images
                                ? classes.image__active
                                : ""
                            }`}
                            key={index}
                            onClick={(e) => {
                              setActivePhoto(item.images);
                            }}
                          >
                            <img src={item.images} alt="" />
                          </div>
                        ))}
                      </div>
                      <div className={classes.active_photo}>
                        <img src={activePhoto} alt="" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={classes.main_left}>
                    <Swiper
                      slidesPerView={1}
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
                      className={classes.mySwiper}
                    >
                      {lists.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className={classes.swiperSlide}
                        >
                          <img key={index} src={item.images} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )
              }
            </Media>
            <div className={classes.main_right}>
              <h3>
                Классическтй комплект со <br /> смокингом и желетом{" "}
                <img src="/images/more/like.svg" alt="svg" />
              </h3>
              <h4>
                65 300 <span>₽</span>
              </h4>

              <div className={classes.size}>
                <h4>РАЗМЕР</h4>
                <div className={classes.size_divs}>
                  <div className={classes.size_items}>40</div>
                  <div className={classes.size_items}>42</div>
                  <div className={classes.size_items}>44</div>
                  <div className={classes.size_items}>46</div>
                  <div className={`${classes.size_items} ${classes.note_size}`}>
                    48
                  </div>
                  <div className={`${classes.size_items} ${classes.note_size}`}>
                    50
                  </div>
                </div>

                <div className={classes.size_bottom}>
                  <h5>
                    <img src="/images/more/size_1.svg" alt="svg" /> ОПРЕДЕЛИТЕ
                    СВОЙ РАЗМЕР
                  </h5>
                  <h5>
                    <img src="/images/more/size_2.svg" alt="svg" /> НЕТ ВАШЕГО
                    РАЗМЕРА ?
                  </h5>
                </div>
              </div>

              <div className={classes.colors}>
                <h5>ЦВЕТ</h5>
                <div className={classes.color_items}>
                  <img src="/images/more/color_black.svg" alt="svg" />
                </div>
                <div className={classes.color_items}>
                  <img src="/images/more/color_red.svg" alt="svg" />
                </div>
                <div className={classes.color_items}>
                  <img src="/images/more/color_grey.svg" alt="svg" />
                </div>
              </div>
              <div className={classes.buttons}>
                <button>КУПИТЬ</button>
                <button>ПРИМЕРКА</button>
                <button>КУПИТЬ В РАССРОЧКУ</button>
              </div>

              <div className={classes.right_info}>
                <p>
                  Приталенный силуэт и заостренные лацканы подчеркивают линию
                  талии, визуально корректируя фигуру до желанной всем "песочные
                  часы". Классика женского смокинга, которую одобрил бы сам Ив
                  Сен Лоран.
                </p>
                <p>
                  <span>Состав</span>: 98% шерсть, 2% эластан, отделка шелком
                </p>
              </div>
              <Accordion className={classes.Accordions}>
                {data.map((item, index) => (
                  <AccordionItem key={index}>
                    {({ open }) => (
                      <>
                        <AccordionHeader className={classes.btn_accordion}>
                          <h4
                            className={`accordion-title ${
                              open ? "accordion-active" : ""
                            }`}
                          >
                            {item.title}
                          </h4>

                          <span
                            className={`accordion-span ${
                              classes.accordion__span
                            } ${open ? classes.accordion_active_span : ""}`}
                          >
                            <span></span>
                            <span></span>
                          </span>
                        </AccordionHeader>

                        <AccordionBody className={classes.AccordionBody}>
                          {item.content.map((item, index) => (
                            <li
                              className={`${classes.accordion_body} accordion-body`}
                              key={index}
                            >
                              {item.content}
                            </li>
                          ))}
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Media query="(min-width:576px)">
        {(matches) =>
          matches ? (
            <>
              <div className={classes.containerSwipper}>
                <h4 className={classes.text}>ВЫГЛЯДЕТЬ БЛИСТАТЕЛЬНО ПОМОЖЕТ</h4>
                <div className={classes.inline}></div>
                <Swiper
                  slidesPerView={4}
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
                  className={classes.mySwiper}
                >
                  {profile.map((item, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                      <div className={classes.profile_account} key={index}>
                        <img src={item.image} alt="" />
                        <div className={classes.title__like}>
                          <h5>{item.name}</h5>
                          <span>
                            <svg
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                                stroke="#222222"
                                strokeMiterlimit="3.8637"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className={classes.price__p}>
                          <h6>{item.price}</h6>
                          <p>Подчеркнет линию талии</p>
                        </div>
                        <img src={item.profile} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ) : (
            <div className={classes.containerSwipper}>
              <h4 className={classes.text}>ВЫГЛЯДЕТЬ БЛИСТАТЕЛЬНО ПОМОЖЕТ</h4>
              <div className={classes.inline}></div>
              <div className="container">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={5}
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
                  className={classes.mySwiper}
                >
                  {profile.map((item, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                      <div className={classes.profile_account} key={index}>
                        <img src={item.image} alt="" />
                        <div className={classes.title__like}>
                          <h5>{item.name}</h5>
                          <span>
                            <svg
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                                stroke="#222222"
                                strokeMiterlimit="3.8637"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className={classes.price__p}>
                          <h6>{item.price}</h6>
                          <p>Подчеркнет линию талии</p>
                        </div>
                        <img src={item.profile} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )
        }
      </Media>
      <section className={classes.more_bottom}>
        <div className={`${classes.container} container`}>
          <div className={classes.more_bottom__top}>
            <div className={classes.more_bottom_top__left}>
              <img src="/images/more/per_1.png" alt="png" />
            </div>
            <div className={classes.more_bottom_top__right}>
              <div className={classes.perform_top_right}>
                <h3>СШИТО ВРУЧНУЮ</h3>

                <div className={classes.perform_top_info_all}>
                  <div className={classes.perform_top_info_one}>
                    <div className={classes.perform_info_box}>
                      <span>1</span>
                      <p>Уровень пошива приравнивается к индивидуальному;</p>
                    </div>
                    <div className={classes.perform_info_box}>
                      <span>2</span>
                      <p>
                        Создаем лекала для костюмов, которые подчеркивают
                        достоинства и скрывают недостатки фигуры;
                      </p>
                    </div>
                    <div className={classes.perform_info_box}>
                      <span>3</span>
                      <p>
                        Качественное исполнение: ровные отстрочки, красивая
                        обработка – вы можете носить вещи даже изнаночной
                        стороной;
                      </p>
                    </div>
                  </div>
                  <div className={classes.perform_top_info_one}>
                    <div className={classes.perform_info_box}>
                      <span>4</span>
                      <p>
                        Используем современное оборудование и качественные
                        материалы для изготовления изделий;
                      </p>
                    </div>
                    <div className={classes.perform_info_box}>
                      <span>5</span>
                      <p>
                        Наши швеи занимаются пошивом и конструированием одежды
                        более 20 лет. За это время их навыки доведены до идеала,
                        и они продолжают развиваться и совершенствоваться каждый
                        день.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.more_bottom__bottom}>
            <div className={classes.perform_two}>
              <div className={classes.perform_alll}>
                <div className={classes.perform_item}>
                  <h2>ЗАКАЖИТЕ ДОСТАВКУ</h2>
                  <p className={classes.big_p}>
                    Закажите доставку с выездным стилистом бренда в удобное
                    место по Москве и МО. Вы сможете оценить посадку, качество
                    изделий и не захотите их снимать!
                  </p>
                  <div className={classes.perform_top_info_all}>
                    <div className={classes.perform_top_info_one}>
                      <div className={classes.perform_info_box}>
                        <span>1</span>
                        <p>Выберите модели для примерки.</p>
                      </div>
                      <div className={classes.perform_info_box}>
                        <span>2</span>
                        <p>Оставьте заявку, нажав на кноку ниже.</p>
                      </div>
                      <div className={classes.perform_info_box}>
                        <span>3</span>
                        <p>
                          Наш стилист подтвердит Вашу заявку и согласует удобное
                          для вас время и место
                        </p>
                      </div>
                    </div>
                    <div className={classes.perform_top_info_one}>
                      <div className={classes.perform_info_box}>
                        <span>4</span>
                        <p>
                          В назначеное время стилист привезет заказаные модели и
                          проведет консультацию.
                        </p>
                      </div>
                      <div className={classes.perform_info_box}>
                        <span>5</span>
                        <p>
                          Вы можете оплатить понравившиеся модели после примерки
                        </p>
                      </div>
                      <button>ЗАКАЗАТЬ ДОСТАВКУ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.more_bottom__right_photo}>
                <img src="/images/more/per_2.png" alt="png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default More;
