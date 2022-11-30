import React, { useState } from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import classes from "./Catalog.module.css";

function Catalog() {
  const [category] = useState([
    {
      name: "Новинки",
    },
    {
      name: "Юбки",
    },
    {
      name: "Смокинг",
    },
    {
      name: "Костюмы",
    },
    {
      name: "Аксессуары",
    },
    {
      name: "Брюки",
    },
    {
      name: "Блузы",
    },
    {
      name: "Платья",
    },
    {
      name: "Топы и жилеты",
    },
  ]);

  const [collaction] = useState([
    {
      name: "Осень-зима 20-21",
    },
    {
      name: "Вечерние комплекты",
    },
    {
      name: "Предзаказ",
    },
    {
      name: "Свадьба и выпускной",
    },
  ]);

  const [one] = useState([
    {
      image: "/images/Catalog/slider_1.png",
      text: "/ Жакет-смокинг с лацканами",
      price: "23 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/first_2.png",
      text: "/ Жакет-смокинг прямой",
      price: "21 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/first_3.png",
      text: "/ Платье-смокинг длинное",
      price: "24 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/first_4.png",
      text: "/ Платье-смокинг молочное",
      price: "26 900 ₽",
      active: true,
    },
    {
      image: "/images/Catalog/first_5.png",
      text: "/ Брюки клёш",
      price: "10 700 ₽",
      active: true,
    },
  ]);
  const [twoo] = useState([
    {
      image: "/images/Catalog/two_1.png",
      text: "/ Классический комплект с смокингом и жилетом",
      price: "65 300 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_2.png",
      text: "/ Белый смокинг с брюками-клёш",
      price: "40 400 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_3.png",
      text: "/ Белый смокинг и брюки с лампасами",
      price: "41 400 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_4.png",
      text: "/ Топ с кружевом черный",
      price: "6000 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_5.png",
      text: "/ Брюки зауженные",
      price: "10 700 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_6.png",
      text: "/ Костюм бархатный",
      price: "49 000 ₽",
      active: false,
    },
  ]);

  const [three] = useState([
    {
      image: "/images/Catalog/three_1.png",
      text: "/ Белый жакет смокинг",
      price: "26 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_2.png",
      text: "/ Жакет - смокинг приталенный синий",
      price: "26 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_3.png",
      text: "/ Классический комплект с бабочкой",
      price: "51 800 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_4.png",
      text: "/ Юбка - карандаш",
      price: "10 700 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_5.png",
      text: "/ Жакет-смокинг с лацканами",
      price: "13 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_2.png",
      text: "/ Жакет-смокинг с лацканами",
      price: "23 900 ₽",
      active: false,
    },
  ]);
  const [four] = useState([
    {
      image: "/images/Catalog/four_1.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: true,
    },
    {
      image: "/images/Catalog/four_2.png",
      text: "/ Жакет-смокинг",
      price: "21 900 ₽",
      active: true,
    },

    {
      image: "/images/Catalog/four_4.png",
      text: "/ Красный приталенный смокинг",
      price: "26 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/four_5.png",
      text: "/ Блуза с баской",
      price: "12 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_2.png",
      text: "/ Жакет-смокинг с лацканами",
      price: "23 900 ₽",
      active: false,
    },
  ]);

  const [productMobile] = useState([
    {
      image: "/images/Catalog/slider_1.png",
      text: "/ Жакет-смокинг с лацканами",
      price: "23 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_1.png",
      text: "/ Классический комплект с смокингом и жилетом",
      price: "65 300 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_1.png",
      text: "/ Белый жакет смокинг",
      price: "26 900 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/four_1.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/mobile_1.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: true,
    },
    {
      image: "/images/Catalog/two_2.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_2.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/first_3.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_3.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/mobile_2.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: true,
    },
    {
      image: "/images/Catalog/four_2.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/first_4.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_4.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_4.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/mobile_3.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: true,
    },
    {
      image: "/images/Catalog/two_5.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/three_5.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/four_5.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
    {
      image: "/images/Catalog/two_6.png",
      text: "/ Жакет-смокинг бархатный",
      price: "29 500 ₽",
      active: false,
    },
  ]);

  return (
    <div className={classes.Catalog}>
      <div className="container">
        <h3>СМОКИНГИ</h3>
        <div className={`${classes.row} row`}>
          <Media query="(min-width:577px)">
            {(matches) =>
              matches ? (
                <>
                  <div className={classes.Catalog_Left}>
                    <div className={classes.left_top}>
                      <h4>КАТЕГОРИИ</h4>
                      <ul>
                        {category.map((item, index) => (
                          <Link to={"/catalog"} key={index}>
                            {item.name}
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className={classes.left_bottom}>
                      <h4 className={classes.collaction_text}>КОЛЕКЦИИ</h4>
                      <ul>
                        {collaction.map((item, index) => (
                          <Link to={"/catalog"} key={index}>
                            {item.name}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={classes.Catalog_Right}>
                    <div className={classes.Catalog_Right_one}>
                      {one.map((item, index) => (
                        <Link
                          to={"/more"}
                          className={`${classes.card} ${
                            item.active ? classes.card_active : ""
                          }`}
                          key={index}
                        >
                          <div className={classes.image}>
                            <img src={item.image} alt="" />
                          </div>
                          <div className={classes.card_top}>
                            <h5>{item.text}</h5>
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
                          <div className={classes.card_bottom}>
                            <div className={classes.bottom_left}>
                              <span>{item.price}</span>
                            </div>
                            <div className={classes.bottom_right}>
                              <h5>Подчеркнет линию талии</h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className={classes.Catalog_Right_twoo}>
                      {twoo.map((item, index) => (
                        <Link
                          to={"/more"}
                          className={`${classes.card} ${
                            item.active ? classes.card_active : ""
                          }`}
                          key={index}
                        >
                          <div className={classes.image}>
                            <img src={item.image} alt="" />
                          </div>
                          <div className={classes.card_top}>
                            <h5>{item.text}</h5>
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
                          <div className={classes.card_bottom}>
                            <div className={classes.bottom_left}>
                              <span>{item.price}</span>
                            </div>
                            <div className={classes.bottom_right}>
                              <h5>Подчеркнет линию талии</h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className={classes.Catalog_Right_three}>
                      {three.map((item, index) => (
                        <Link
                          to={"/more"}
                          className={`${classes.card} ${
                            item.active ? classes.card_active : ""
                          }`}
                          key={index}
                        >
                          <div className={classes.image}>
                            <img src={item.image} alt="" />
                          </div>
                          <div className={classes.card_top}>
                            <h5>{item.text}</h5>
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
                          <div className={classes.card_bottom}>
                            <div className={classes.bottom_left}>
                              <span>{item.price}</span>
                            </div>
                            <div className={classes.bottom_right}>
                              <h5>Подчеркнет линию талии</h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className={classes.Catalog_Right_four}>
                      {four.map((item, index) => (
                        <Link
                          to={"/more"}
                          className={`${classes.card} ${
                            item.active ? classes.card_active : ""
                          }`}
                          key={index}
                        >
                          <div className={classes.image}>
                            <img src={item.image} alt="" />
                          </div>
                          <div className={classes.card_top}>
                            <h5>{item.text}</h5>
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
                          <div className={classes.card_bottom}>
                            <div className={classes.bottom_left}>
                              <span>{item.price}</span>
                            </div>
                            <div className={classes.bottom_right}>
                              <h5>Подчеркнет линию талии</h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className={classes.Catalog_Right_one}>
                  {productMobile.map((item, index) => (
                    <Link to={"/more"}
                      className={`${classes.card} ${
                        item.active ? classes.card_active : ""
                      }`}
                      key={index}
                    >
                      <div className={classes.image}>
                        <img src={item.image} alt="" />
                      </div>
                      <div className={classes.card_top}>
                        <h5>{item.text}</h5>
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
                      <div className={classes.card_bottom}>
                        <div className={classes.bottom_left}>
                          <span>{item.price}</span>
                        </div>
                        <div className={classes.bottom_right}>
                          <h5>Подчеркнет линию талии</h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            }
          </Media>
        </div>
        <div className={classes.refresh}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 7H6.19306C7.55354 5.0787 9.60638 4 12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2C9.19577 2 6.72511 3.18251 5 5.27035V2H3V9H10V7ZM14 17H17.8069C16.4465 18.9213 14.3936 20 12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22C14.8042 22 17.2749 20.8175 19 18.7297V22H21V15H14V17Z"
              fill="#C7C7C7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
