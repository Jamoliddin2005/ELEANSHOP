import React, { useState } from "react";
import classes from "./Card.module.css";

function Card({ card }) {
  const [cardProduct, setCardProduct] = useState([
    {
      image: "/images/Catalog/four_5.png",
      title: "Белый смокинг и брюки с лампасами",
      price: "41 400 ₽",
      size: 46,
      count: 1,
    },
    {
      image: "/images/Catalog/four_5.png",
      title: "Белый смокинг и брюки с лампасами",
      price: "41 400 ₽",
      size: 46,
      count: 1,
    },
  ]);

  return (
    <div className={`${classes.Card} ${card ? classes.Card_active : ""}`}>
      <div className={classes.card_top}>
        <h4>КОРЗИНА</h4>
        <span className={classes.line}></span>
        <div className={classes.close}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 13L13 1" stroke="black" strokeWidth="2" />
            <path d="M13 13L1 1" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>
      {cardProduct.map((item, index) => (
        <div className={classes.card_item} key={index}>
          <div className={classes.card_img}>
            <img src={item.image} alt="" />
          </div>
          <div className={classes.card_item_right}>
            <div className={classes.card_title}>
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
            <span className={classes.size_text}>
              <span>Размер</span> {item.size}
            </span>
            <p>Количество</p>
            <div className={classes.card_item_bottom}>
              <div className={classes.sizes}>
                <div className={classes.minus}>
                  <svg
                    width="15"
                    height="1"
                    viewBox="0 0 15 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="15" height="1" fill="#D8D7D7" />
                  </svg>
                </div>
                <div className={classes.num}>
                  <span>{item.count}</span>
                </div>
                <div className={classes.plus}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 14L14 1" stroke="#C5C0C0" />
                    <path d="M14 14L1 1" stroke="#C5C0C0" />
                  </svg>
                </div>
              </div>
              <div className={classes.delete}>
                <span>Удалить</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 14L14 1" stroke="#C5C0C0" />
                  <path d="M14 14L1 1" stroke="#C5C0C0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
