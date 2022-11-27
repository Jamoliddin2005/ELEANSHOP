import React, { useState } from "react";
import classes from "./More.module.css";

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

  return (
    <div className={classes.more}>
      <main>
        <div className={`${classes.container} container`}>
          <div className={`${classes.row} row`}>
            <div className={classes.main_left}>
              <div className={classes.main_left_lists}>
                {lists.map((item, index) => (
                  <div
                    className={`${classes.item} ${
                      activePhoto === item.images ? classes.image__active : ""
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
            </div>
          </div>
        </div>
      </main>

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
