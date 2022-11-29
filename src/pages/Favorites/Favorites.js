import React from "react";
import classes from "./Favorites.module.css";
function Favorites() {
  return (
    <div className={classes.favorite}>
      <div className="container">
        <h2 className={classes.favorite_title}>ИЗБРАННОЕ</h2>

        <div className={classes.favorite_line}></div>

        <div className={classes.favorite_cards}>
          <div className={classes.favorite_card}>
            <div className={classes.card_info}>
              <img src="/images/oblozhka 9.png" alt="" />
              <div className={classes.info}>
                <p className={classes.info_text}>
                  Классический комплект с смокингом и жилетом
                </p>
                <span className={classes.info_price}>63 500 ₽</span>
                <button className={`${classes.btn} ${classes.media_buy}`}>
                  КУПИТЬ
                </button>
                <span className={classes.mobil_delete}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 17L17 1" stroke="#676767" />
                    <path d="M17 17L0.999999 1" stroke="#676767" />
                  </svg>
                </span>
              </div>
            </div>
            <div
              className={`${classes.favorite_line} ${classes.in_card}`}
            ></div>
            <div className={classes.card_form}>
              <textarea
                name=""
                id=""
                placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
              ></textarea>
              <div className={classes.buttons}>
                <button className={`${classes.btn} ${classes.buy}`}>
                  КУПИТЬ
                </button>
                <button className={`${classes.btn} ${classes.delete}`}>
                  Удалить
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 14L14 1" stroke="#C5C0C0" />
                    <path d="M14 14L1 1" stroke="#C5C0C0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={classes.favorite_card}>
            <div className={classes.card_info}>
              <img src="/images/oblozhka 9.png" alt="" />
              <div className={classes.info}>
                <p className={classes.info_text}>
                  Классический комплект с смокингом и жилетом
                </p>
                <span className={classes.info_price}>63 500 ₽</span>
                <button className={`${classes.btn} ${classes.media_buy}`}>
                  КУПИТЬ
                </button>
                <span className={classes.mobil_delete}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 17L17 1" stroke="#676767" />
                    <path d="M17 17L0.999999 1" stroke="#676767" />
                  </svg>
                </span>
              </div>
            </div>
            <div
              className={`${classes.favorite_line} ${classes.in_card}`}
            ></div>
            <div className={classes.card_form}>
              <textarea
                name=""
                id=""
                placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
              ></textarea>
              <div className={classes.buttons}>
                <button className={`${classes.btn} ${classes.buy}`}>
                  КУПИТЬ
                </button>
                <button className={`${classes.btn} ${classes.delete}`}>
                  Удалить
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 14L14 1" stroke="#C5C0C0" />
                    <path d="M14 14L1 1" stroke="#C5C0C0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={classes.favorite_card}>
            <div className={classes.card_info}>
              <img src="/images/oblozhka 9.png" alt="" />
              <div className={classes.info}>
                <p className={classes.info_text}>
                  Классический комплект с смокингом и жилетом
                </p>
                <span className={classes.info_price}>63 500 ₽</span>
                <button className={`${classes.btn} ${classes.media_buy}`}>
                  КУПИТЬ
                </button>
                <span className={classes.mobil_delete}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 17L17 1" stroke="#676767" />
                    <path d="M17 17L0.999999 1" stroke="#676767" />
                  </svg>
                </span>
              </div>
            </div>
            <div
              className={`${classes.favorite_line} ${classes.in_card}`}
            ></div>
            <div className={classes.card_form}>
              <textarea
                name=""
                id=""
                placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
              ></textarea>
              <div className={classes.buttons}>
                <button className={`${classes.btn} ${classes.buy}`}>
                  КУПИТЬ
                </button>
                <button className={`${classes.btn} ${classes.delete}`}>
                  Удалить
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 14L14 1" stroke="#C5C0C0" />
                    <path d="M14 14L1 1" stroke="#C5C0C0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${classes.favorite_line} ${classes.bottom}`}></div>

        <div className={classes.send_email}>
          <h3 className={classes.send_title}>ДЕЙСТВИЯ НАД ЛИСТОМ ПОЖЕЛАНИЙ</h3>
          <div className={classes.send}>
            <button className={classes.send_btn}>ОТПРАВИТЬ НА ПОЧТУ</button>
            <p className={classes.send_text}>
              Список товаров находящихся в “избронном”, будет отправлен на ваш
              электронный адрес, и вы в любой момент сможете получить к нему
              доступ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
