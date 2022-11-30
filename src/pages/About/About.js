import React, { useRef, useState } from "react";
import classes from "./About.module.css";
import Advantages from "./Advantages";
import useVideoPlayer from "./VideoPlayer";

function About() {
  const [video] = useState({
    poster: "/images/About/poster.png",
    video: "/video/video.mp4",
  });
  const videoElement = useRef(null);
  const { togglePlay, playerState } = useVideoPlayer(videoElement);

  return (
    <div className={classes.About}>
      <div className="container">
        <h2 className={classes.title}>О БРЕНДЕ</h2>
        <div className={classes.video}>
          <video
            src={video.video}
            ref={videoElement}
            poster={video.poster}
          ></video>
          <div
            className={`${classes.player} ${
              playerState.isPlaying ? classes.active : ""
            }`}
            onClick={togglePlay}
          >
            {playerState.isPlaying ? (
              <svg
                width="63px"
                height="63px"
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>73. Pause</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="73.-Pause"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    transform="translate(2.000000, 2.000000)"
                    stroke="#fff"
                    strokeWidth="4"
                  >
                    <circle id="Layer-1" cx="48" cy="48" r="48"></circle>
                    <path
                      d="M28,28 L43,28 L43,68 L28,68 L28,28 Z M53,28 L68,28 L68,68 L53,68 L53,28 Z"
                      id="Layer-2"
                    ></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="30"
                  stroke="white"
                  strokeOpacity="0.85"
                  strokeWidth="3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.7361 30.9052L21.3965 14.2637V47.5467L48.7361 30.9052Z"
                  stroke="white"
                  strokeOpacity="0.85"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div className={classes.bg}></div>
        </div>
        <h3>ELEAN</h3>
        <div className={classes.about_section}>
          <div className={classes.left}>
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
            <p>
              История бренда началась задолго до первого показа, который
              состоялся 12 марта 2016 года, с мечты автора коллекции, Елены
              Писаревой о собственном бренде элегантной одежды и продолжалась
              долгие 30 лет накопления профессионального опыта. Вся первая
              коллекция была выполнена из 100% натурального шелка, в нее вошли
              жентсвенные платья и костюмы.
            </p>
          </div>
          <div className={classes.right}>
            <p>
              В сентябре 2016 года впервые был показан женский костюм со
              смокингом. В сентябре 2017 года в коллекции бренда было уже три
              модели женских смокингов на разные типы фигуры и вкус.
            </p>
            <p>
              В 2018 году коллекцию пополнило еще 2 модели смокингов и
              сформирована полная капсула дополняющих изделия, таких как блуза с
              бабочкой, топ с кружевом и даже тельняшка. Жемчужиной базовой
              коллекции стало платье-смокинг.
            </p>
            <p>
              Кроме базовой коллекции смокингов, каждый сезон мы выпускаем
              капсулу из 7-12 вещей, которые эффектно освежат ваш гардероб. Все
              коллекции бренда отшиваются только из натуральных тканей: шерсть и
              шелк.
            </p>
          </div>
        </div>
        <div className={classes.users}>
          <div className={classes.user__left}>
            <img src="/images/About/user_1.png" alt="" />
            <h4>ЕЛЕНА ПИСАРЕВА</h4>
            <p>
              Автор коллекции, лекал и технологии пошива в бренде ELEAN. Имеет
              высшее образование инженера - технолога швейных изделий и опыт
              свыше 30 лет в разработке и пошиве изделий.{" "}
            </p>
          </div>
          <div className={classes.user__right}>
            <img src="/images/About/user_2.png" alt="" />
            <h4>АНАСТАСИЯ И АННА</h4>
            <p>
              Дочери Елены, с детства впитывали мастерство мамы и взяли на себя
              роль в управлении и становлении бренда. Анна является главным
              стилистом и операционным управляющей. Анастасия управляет отделом
              маркетинга и рекламы.
            </p>
          </div>
        </div>
      </div>
      <Advantages />
    </div>
  );
}

export default About;
