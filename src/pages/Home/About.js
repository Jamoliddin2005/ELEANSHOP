import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.About}>
      <div className="container">
        <h2>О БРЕНДЕ</h2>
        <div className={classes.about_main}>
          <div className={classes.left_about}>
            <img src="/images/Home/Безымянный кадр60568 3.png" alt="" />
          </div>
          <div className={classes.right_about}>
            <p>
              Сегодня ELEAN - это первый в России магазин готового женского
              смокинга. У нас каждая женщина может подобрать для себя образ со
              смокингом, такой же как у голливудских див и звезд светской
              хроники.
            </p>
            <p>
              Костюм со смокингом ELEAN - выбор звёзд эстрады и кино,
              телеведущих, fashion-стилистов, успешных женщин-руководителей,
              представительниц научной и деловой элиты.
            </p>
            <div className={classes.desktop_deleted}>
              <img src="/images/Home/Безымянный кадр60568 3.png" alt="" />
            </div>
            <p>
              История бренда началась задолго до первого показа, который
              состоялся 12 марта 2016 года, с мечты автора коллекции, Елены
              Писаревой о собственном бренде элегантной одежды и продолжалась
              долгие 30 лет накопления профессионального опыта. Вся первая
              коллекция была выполнена из 100% натурального шелка, в нее вошли
              жентсвенные платья и костюмы.
            </p>

            <Link to="/">
              <span>Подробнее</span> \{" "}
              <svg
                width="25"
                height="5"
                viewBox="0 0 25 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="25"
                  y="2"
                  width="1"
                  height="25"
                  transform="rotate(90 25 2)"
                  fill="#C0C0C0"
                />
                <rect
                  x="24"
                  y="3"
                  width="1"
                  height="1"
                  transform="rotate(90 24 3)"
                  fill="#C0C0C0"
                />
                <rect
                  x="24"
                  y="1"
                  width="1"
                  height="1"
                  transform="rotate(90 24 1)"
                  fill="#C0C0C0"
                />
                <rect
                  x="23"
                  y="4"
                  width="1"
                  height="1"
                  transform="rotate(90 23 4)"
                  fill="#C0C0C0"
                />
                <rect
                  x="23"
                  width="1"
                  height="1"
                  transform="rotate(90 23 0)"
                  fill="#C0C0C0"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
