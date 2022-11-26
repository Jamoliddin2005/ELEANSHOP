import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import Card from "../Card/Card";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [card, setCard] = useState(false);
  const data = [
    {
      title: "КОЛЛЕКЦИЯ",
      content: [
        {
          content: "Осень-зима 20-21",
        },
        {
          content: "Вечерние комплекты",
        },
        {
          content: "Свадьба и выпускной",
        },
        {
          content: "Смокинг",
        },
        {
          content: "Костюмы",
        },
        {
          content: "Брюки",
        },
        {
          content: "Блузы",
        },
        {
          content: "Платья",
        },
        {
          content: "Топы и жилеты",
        },
        {
          content: "Юбки",
        },
        {
          content: "Аксессуары",
        },
      ],
    },
    {
      title: "ШОУРУМ",
      content: [
        {
          content: "Осень-зима 20-21",
        },
        {
          content: "Вечерние комплекты",
        },
        {
          content: "Свадьба и выпускной",
        },
        {
          content: "Смокинг",
        },
        {
          content: "Костюмы",
        },
        {
          content: "Брюки",
        },
        {
          content: "Блузы",
        },
        {
          content: "Платья",
        },
        {
          content: "Топы и жилеты",
        },
        {
          content: "Юбки",
        },
        {
          content: "Аксессуары",
        },
      ],
    },
    {
      title: "ПОКУПАТЕЛЯМ",
      content: [
        {
          content: "Осень-зима 20-21",
        },
        {
          content: "Вечерние комплекты",
        },
        {
          content: "Свадьба и выпускной",
        },
        {
          content: "Смокинг",
        },
        {
          content: "Костюмы",
        },
        {
          content: "Брюки",
        },
        {
          content: "Блузы",
        },
        {
          content: "Платья",
        },
        {
          content: "Топы и жилеты",
        },
        {
          content: "Юбки",
        },
        {
          content: "Аксессуары",
        },
      ],
    },
    {
      title: "О КОМПАНИИ",
      content: [
        {
          content: "Осень-зима 20-21",
        },
        {
          content: "Вечерние комплекты",
        },
        {
          content: "Свадьба и выпускной",
        },
        {
          content: "Смокинг",
        },
        {
          content: "Костюмы",
        },
        {
          content: "Брюки",
        },
        {
          content: "Блузы",
        },
        {
          content: "Платья",
        },
        {
          content: "Топы и жилеты",
        },
        {
          content: "Юбки",
        },
        {
          content: "Аксессуары",
        },
      ],
    },
    {
      title: "ОТЗЫВЫ",
      content: [
        {
          content: "Осень-зима 20-21",
        },
        {
          content: "Вечерние комплекты",
        },
        {
          content: "Свадьба и выпускной",
        },
        {
          content: "Смокинг",
        },
        {
          content: "Костюмы",
        },
        {
          content: "Брюки",
        },
        {
          content: "Блузы",
        },
        {
          content: "Платья",
        },
        {
          content: "Топы и жилеты",
        },
        {
          content: "Юбки",
        },
        {
          content: "Аксессуары",
        },
      ],
    },
  ];

  return (
    <>
      <div className={`${classes.Navbar} Navbar`}>
        <div className={`${classes.container} container`}>
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <div
                className={classes.bars}
                onClick={(e) => {
                  setNavbar(true);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={classes.socials}>
                <Link to="instagram.com">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.59322 18.0494C2.52563 18.0494 0 15.5259 0 12.4346V5.61474C0 2.5227 2.52563 0 5.59322 0H12.3364C15.426 0 17.9296 2.5227 17.9296 5.61474V12.4346C17.9296 15.5259 15.426 18.0494 12.3364 18.0494H5.59322ZM1.82719 5.61556V12.4355C1.82719 14.5266 3.51827 16.2314 5.59322 16.2314H12.3364C14.4105 16.2314 16.1024 14.5266 16.1024 12.4355V5.61556C16.1024 3.52439 14.4105 1.81962 12.3364 1.81962H5.59322C3.51827 1.81962 1.82719 3.52439 1.82719 5.61556Z"
                      fill="#2F2F2F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.30664 9.02516C4.30664 6.4336 6.40359 4.32031 8.97485 4.32031C11.5461 4.32031 13.6211 6.4336 13.6211 9.02516C13.6211 11.6159 11.5461 13.73 8.97485 13.73C6.40359 13.73 4.30664 11.6159 4.30664 9.02516ZM6.15583 9.02516C6.15583 10.5937 7.41824 11.8661 8.97485 11.8661C10.5086 11.8661 11.7719 10.5937 11.7719 9.02516C11.7719 7.4566 10.5086 6.18338 8.97485 6.18338C7.41824 6.18338 6.15583 7.4566 6.15583 9.02516Z"
                      fill="#2F2F2F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.8469 5.52449C13.0808 5.52449 12.4492 4.88871 12.4492 4.11594C12.4492 3.31937 13.0808 2.68359 13.8469 2.68359C14.6138 2.68359 15.2454 3.31937 15.2454 4.11594C15.2454 4.88871 14.6138 5.52449 13.8469 5.52449Z"
                      fill="#2F2F2F"
                    />
                  </svg>
                </Link>
                <Link to="wk.com">
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1226 11.6601C11.1226 11.6601 11.458 11.6217 11.6257 11.4502C11.7935 11.2778 11.7748 10.9509 11.7748 10.9509C11.7748 10.9509 11.7562 9.43951 12.4456 9.2287C13.1351 8.99825 14.0109 10.6838 14.9426 11.3153C15.6506 11.8137 16.191 11.6985 16.191 11.6985L18.6693 11.6601C18.6693 11.6601 19.9737 11.5842 19.3588 10.5498C19.3029 10.473 19.0047 9.7843 17.5131 8.38637C15.9479 6.93129 16.1529 7.16174 18.0349 4.65263C19.1715 3.10286 19.6374 2.16496 19.4883 1.7621C19.3579 1.3798 18.5194 1.47627 18.5194 1.47627L15.7057 1.49502C15.7057 1.49502 15.5016 1.47627 15.3525 1.57095C15.2034 1.64777 15.1103 1.85768 15.1103 1.85768C15.1103 1.85768 14.6631 3.06355 14.0668 4.07828C12.8183 6.20329 12.3338 6.31852 12.1289 6.18364C11.6444 5.87726 11.7562 4.93936 11.7562 4.28908C11.7562 2.20247 12.073 1.34049 11.1599 1.12969C10.8618 1.05287 10.6382 0.995703 9.85554 0.995703C8.84931 0.976945 8.01079 0.995703 7.52631 1.22616C7.20954 1.39855 6.9673 1.74245 7.11637 1.7621C7.30271 1.78086 7.71266 1.87733 7.93626 2.18371C8.21577 2.56691 8.21576 3.4673 8.21576 3.4673C8.21576 3.4673 8.38347 5.8987 7.82446 6.20419C7.45178 6.41499 6.93003 5.97373 5.81201 4.04076C5.25299 3.04569 4.82442 1.95415 4.82442 1.95415C4.82442 1.95415 4.73125 1.74335 4.58218 1.64777C4.41448 1.51378 4.15361 1.45572 4.15361 1.45572L1.48898 1.47537C1.48898 1.47537 1.09767 1.49413 0.948597 1.66563C0.81816 1.81927 0.948597 2.1453 0.948597 2.1453C0.948597 2.1453 3.01695 7.06527 5.38344 9.53419C7.54584 11.8128 10.0046 11.6592 10.0046 11.6592H11.1226V11.6601Z"
                      fill="#2F2F2F"
                    />
                  </svg>
                </Link>
                <Link to="facebook.com">
                  <svg
                    width="8"
                    height="17"
                    viewBox="0 0 8 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.28495 16.1219H1.82511V8.22679H0.113281V5.515H1.82511V3.88404C1.82511 1.65199 2.79595 0.330078 5.56704 0.330078H7.86153V3.05967H6.4318C5.35567 3.05967 5.28495 3.43666 5.28495 4.14131V5.51419H7.88002L7.57944 8.22679H5.28495V16.1219Z"
                      fill="#2F2F2F"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={classes.center}>
              <Link to="/">
                <img src="/images/logo_black.png" alt="" />
              </Link>
            </div>
            <div className={classes.right}>
              <div className={classes.phone}>
                <a href="tel:+7(495)150-14-77">+7 (495) 150 - 14 - 77</a>
              </div>
              <div className={classes.LikeAndCard}>
                <Link to={"/likes"}>
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                  </svg>
                  <span>0</span>
                </Link>
                <Link
                  to={"#"}
                  onClick={(e) => {
                    setCard(true);
                  }}
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.67929 20.8598H0.499023V4.50195H3.73406"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M5.89062 5.18856C5.89062 5.18856 5.89062 5.36384 5.89062 3.76822C5.89062 2.17355 7.09758 0.880859 8.58649 0.880859C10.0754 0.880859 11.2824 2.17355 11.2824 3.76822C11.2824 5.36288 11.2824 5.18856 11.2824 5.18856"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z"
                      fill="#E1C4A9"
                    />
                    <path
                      d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z"
                      stroke="black"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M9.12598 6.27259C9.12598 6.27259 9.12598 4.90562 9.12598 3.47365C9.12598 2.04167 10.3329 0.880859 11.8218 0.880859C13.3108 0.880859 14.5177 2.04167 14.5177 3.47365C14.5177 4.90562 14.5177 6.27259 14.5177 6.27259"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                  </svg>
                  <span>2</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.row_bottom}>
            <ul>
              <li>
                <Link to={"/news"}>НОВИНИКИ</Link>
              </li>
              <li>
                <Link to={"/news"}>КАТЕГОРИИ</Link>
              </li>
              <li>
                <Link to={"/news"}>НАШИ КОЛЛЕКЦИИ</Link>
              </li>
              <li>
                <Link to={"/news"}>ПОКУПАТЕЛЯМ</Link>
              </li>
              <li>
                <Link to={"/news"}>О БРЕНДЕ</Link>
              </li>
              <li>
                <Link to={"/news"}>ШОУРУМ</Link>
              </li>
              <li>
                <Link to={"/news"}>КОНТАКТЫ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${classes.containerMobile} container`}>
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <div
                className={classes.bars}
                onClick={(e) => {
                  setNavbarMobile(true);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link to={"/likes"}>
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7965 3.27615C10.1877 2.73743 7.85542 0.801656 5.79016 0.82144C3.67352 0.841984 0.406316 2.20478 0.681891 6.24296C0.92555 9.81014 10.6345 17.1454 10.6345 17.1454C10.6953 17.1895 10.7583 17.1895 10.8237 17.1454C10.8237 17.1454 20.5327 9.80938 20.7763 6.24296C21.0519 2.20478 17.7847 0.841984 15.6673 0.82144C13.2689 0.798612 10.51 3.41312 10.51 3.41312L8.637 5.29182"
                    stroke="#333333"
                    strokeMiterlimit="3.8637"
                  />
                </svg>

                <span>0</span>
              </Link>
            </div>
            <div className={classes.center}>
              <Link to="/">
                <img src="/images/logo_media_black.png" alt="" />
              </Link>
            </div>
            <div className={classes.right}>
              <div className={classes.LikeAndCard}>
                <Link
                  to={"#"}
                  onClick={(e) => {
                    setCard(true);
                  }}
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.67929 20.8598H0.499023V4.50195H3.73406"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M5.89062 5.18856C5.89062 5.18856 5.89062 5.36384 5.89062 3.76822C5.89062 2.17355 7.09758 0.880859 8.58649 0.880859C10.0754 0.880859 11.2824 2.17355 11.2824 3.76822C11.2824 5.36288 11.2824 5.18856 11.2824 5.18856"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z"
                      fill="#E1C4A9"
                    />
                    <path
                      d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z"
                      stroke="black"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M9.12598 6.27259C9.12598 6.27259 9.12598 4.90562 9.12598 3.47365C9.12598 2.04167 10.3329 0.880859 11.8218 0.880859C13.3108 0.880859 14.5177 2.04167 14.5177 3.47365C14.5177 4.90562 14.5177 6.27259 14.5177 6.27259"
                      stroke="#333333"
                      strokeMiterlimit="3.8637"
                    />
                  </svg>
                  <span>2</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.Navbar} ${classes.Navbar_black} ${
          navbar ? classes.navbar_active : ""
        }`}
      >
        <div className="container">
          <div className={`${classes.row} row`}>
            <div className={classes.left}>
              <div
                className={classes.bars}
                onClick={(e) => {
                  setNavbar(false);
                }}
              >
                <span></span>
                <span></span>
              </div>
              <div className={classes.socials}>
                <Link to="instagram.com">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.59322 18.0494C2.52563 18.0494 0 15.5259 0 12.4346V5.61474C0 2.5227 2.52563 0 5.59322 0H12.3364C15.426 0 17.9296 2.5227 17.9296 5.61474V12.4346C17.9296 15.5259 15.426 18.0494 12.3364 18.0494H5.59322ZM1.82719 5.61556V12.4355C1.82719 14.5266 3.51827 16.2314 5.59322 16.2314H12.3364C14.4105 16.2314 16.1024 14.5266 16.1024 12.4355V5.61556C16.1024 3.52439 14.4105 1.81962 12.3364 1.81962H5.59322C3.51827 1.81962 1.82719 3.52439 1.82719 5.61556Z"
                      fill="#2F2F2F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.30664 9.02516C4.30664 6.4336 6.40359 4.32031 8.97485 4.32031C11.5461 4.32031 13.6211 6.4336 13.6211 9.02516C13.6211 11.6159 11.5461 13.73 8.97485 13.73C6.40359 13.73 4.30664 11.6159 4.30664 9.02516ZM6.15583 9.02516C6.15583 10.5937 7.41824 11.8661 8.97485 11.8661C10.5086 11.8661 11.7719 10.5937 11.7719 9.02516C11.7719 7.4566 10.5086 6.18338 8.97485 6.18338C7.41824 6.18338 6.15583 7.4566 6.15583 9.02516Z"
                      fill="#2F2F2F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.8469 5.52449C13.0808 5.52449 12.4492 4.88871 12.4492 4.11594C12.4492 3.31937 13.0808 2.68359 13.8469 2.68359C14.6138 2.68359 15.2454 3.31937 15.2454 4.11594C15.2454 4.88871 14.6138 5.52449 13.8469 5.52449Z"
                      fill="#2F2F2F"
                    />
                  </svg>
                </Link>
                <Link to="wk.com">
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1226 11.6601C11.1226 11.6601 11.458 11.6217 11.6257 11.4502C11.7935 11.2778 11.7748 10.9509 11.7748 10.9509C11.7748 10.9509 11.7562 9.43951 12.4456 9.2287C13.1351 8.99825 14.0109 10.6838 14.9426 11.3153C15.6506 11.8137 16.191 11.6985 16.191 11.6985L18.6693 11.6601C18.6693 11.6601 19.9737 11.5842 19.3588 10.5498C19.3029 10.473 19.0047 9.7843 17.5131 8.38637C15.9479 6.93129 16.1529 7.16174 18.0349 4.65263C19.1715 3.10286 19.6374 2.16496 19.4883 1.7621C19.3579 1.3798 18.5194 1.47627 18.5194 1.47627L15.7057 1.49502C15.7057 1.49502 15.5016 1.47627 15.3525 1.57095C15.2034 1.64777 15.1103 1.85768 15.1103 1.85768C15.1103 1.85768 14.6631 3.06355 14.0668 4.07828C12.8183 6.20329 12.3338 6.31852 12.1289 6.18364C11.6444 5.87726 11.7562 4.93936 11.7562 4.28908C11.7562 2.20247 12.073 1.34049 11.1599 1.12969C10.8618 1.05287 10.6382 0.995703 9.85554 0.995703C8.84931 0.976945 8.01079 0.995703 7.52631 1.22616C7.20954 1.39855 6.9673 1.74245 7.11637 1.7621C7.30271 1.78086 7.71266 1.87733 7.93626 2.18371C8.21577 2.56691 8.21576 3.4673 8.21576 3.4673C8.21576 3.4673 8.38347 5.8987 7.82446 6.20419C7.45178 6.41499 6.93003 5.97373 5.81201 4.04076C5.25299 3.04569 4.82442 1.95415 4.82442 1.95415C4.82442 1.95415 4.73125 1.74335 4.58218 1.64777C4.41448 1.51378 4.15361 1.45572 4.15361 1.45572L1.48898 1.47537C1.48898 1.47537 1.09767 1.49413 0.948597 1.66563C0.81816 1.81927 0.948597 2.1453 0.948597 2.1453C0.948597 2.1453 3.01695 7.06527 5.38344 9.53419C7.54584 11.8128 10.0046 11.6592 10.0046 11.6592H11.1226V11.6601Z"
                      fill="#2F2F2F"
                    />
                  </svg>
                </Link>
                <Link to="facebook.com">
                  <svg
                    width="8"
                    height="17"
                    viewBox="0 0 8 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.28495 16.1219H1.82511V8.22679H0.113281V5.515H1.82511V3.88404C1.82511 1.65199 2.79595 0.330078 5.56704 0.330078H7.86153V3.05967H6.4318C5.35567 3.05967 5.28495 3.43666 5.28495 4.14131V5.51419H7.88002L7.57944 8.22679H5.28495V16.1219Z"
                      fill="#2F2F2F"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={classes.center}>
              <Link
                to="/"
                onClick={(e) => {
                  setNavbar(false);
                }}
              >
                <img src="/images/logo_white.png" alt="" />
              </Link>
            </div>
            <div className={classes.right}>
              <div className={classes.phone}>
                <a href="tel:+7(495)150-14-77">+7 (495) 150 - 14 - 77</a>
              </div>
              <div className={classes.LikeAndCard}>
                <Link to={"/likes"}>
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736"
                      stroke="white"
                      strokeMiterlimit="3.8637"
                    />
                  </svg>

                  <span>0</span>
                </Link>
                <Link
                  to={"#"}
                  onClick={(e) => {
                    setCard(true);
                  }}
                >
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.18027 20.9789H1V4.62109H4.23504"
                      stroke="white"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M6.39258 5.3077C6.39258 5.3077 6.39258 5.48298 6.39258 3.88736C6.39258 2.29269 7.59954 1 9.08844 1C10.5774 1 11.7843 2.29269 11.7843 3.88736C11.7843 5.48202 11.7843 5.3077 11.7843 5.3077"
                      stroke="white"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M4.25977 4.62109H20V20.9789H4.25977V4.62109Z"
                      fill="#191919"
                    />
                    <path
                      d="M4.25977 4.62109H20V20.9789H4.25977V4.62109Z"
                      stroke="white"
                      strokeMiterlimit="3.8637"
                    />
                    <path
                      d="M9.62695 6.39173C9.62695 6.39173 9.62695 5.02476 9.62695 3.59279C9.62695 2.16081 10.8339 1 12.3228 1C13.8117 1 15.0187 2.16081 15.0187 3.59279C15.0187 5.02476 15.0187 6.39173 15.0187 6.39173"
                      stroke="white"
                      strokeMiterlimit="3.8637"
                    />
                  </svg>

                  <span>2</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.row_bottom}>
            <ul>
              <li>
                <Link to={"/news"}>НОВИНИКИ</Link>
              </li>
              <li>
                <Link to={"/news"}>КАТЕГОРИИ</Link>
              </li>
              <li>
                <Link to={"/news"}>НАШИ КОЛЛЕКЦИИ</Link>
              </li>
              <li>
                <Link to={"/news"}>ПОКУПАТЕЛЯМ</Link>
              </li>
              <li>
                <Link to={"/news"}>О БРЕНДЕ</Link>
              </li>
              <li>
                <Link to={"/news"}>ШОУРУМ</Link>
              </li>
              <li>
                <Link to={"/news"}>КОНТАКТЫ</Link>
              </li>
            </ul>
          </div>
          <div className={classes.uls}>
            <ul>
              <h4>Категории</h4>

              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Юбки
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Смокинг
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Костюмы
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Аксессуары
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Брюки
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Блузы
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Платья
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={(e) => {
                    setNavbar(false);
                  }}
                >
                  Топы и жилеты
                </Link>
              </li>
            </ul>
            <ul>
              <h4>Коллекции</h4>

              <li>
                <Link to={"/"}>Осень-зима 20-21</Link>
              </li>
              <li>
                <Link to={"/"}>Вечерние комплекты</Link>
              </li>
              <li>
                <Link to={"/"}>Предзаказ</Link>
              </li>
              <li>
                <Link to={"/"}>Свадьба и выпускной</Link>
              </li>
            </ul>
            <ul>
              <h4>Покупателям</h4>

              <li>
                <Link to={"/"}>Доставка </Link>
              </li>
              <li>
                <Link to={"/"}>Акции </Link>
              </li>
              <li>
                <Link to={"/"}>Возврат </Link>
              </li>
              <li>
                <Link to={"/"}>Размерная таблица </Link>
              </li>
              <li>
                <Link to={"/"}>Примерка </Link>
              </li>
              <li>
                <Link to={"/"}>Оптовым</Link>
              </li>
            </ul>
            <ul>
              <h4>О бренде</h4>

              <li>
                <Link to={"/"}>Юбки</Link>
              </li>
              <li>
                <Link to={"/"}>Смокинг</Link>
              </li>
              <li>
                <Link to={"/"}>Костюмы</Link>
              </li>
              <li>
                <Link to={"/"}>Аксессуары</Link>
              </li>
              <li>
                <Link to={"/"}>Брюки</Link>
              </li>
              <li>
                <Link to={"/"}>Блузы</Link>
              </li>
              <li>
                <Link to={"/"}>Платья</Link>
              </li>
              <li>
                <Link to={"/"}>Топы и жилеты</Link>
              </li>
            </ul>
            <ul>
              <h4>Контакты</h4>

              <li>
                <Link to={"/"}>Юбки</Link>
              </li>
              <li>
                <Link to={"/"}>Смокинг</Link>
              </li>
              <li>
                <Link to={"/"}>Костюмы</Link>
              </li>
              <li>
                <Link to={"/"}>Аксессуары</Link>
              </li>
              <li>
                <Link to={"/"}>Брюки</Link>
              </li>
              <li>
                <Link to={"/"}>Блузы</Link>
              </li>
              <li>
                <Link to={"/"}>Платья</Link>
              </li>
              <li>
                <Link to={"/"}>Топы и жилеты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${classes.navbar_mobile} ${
          navbarMobile ? classes.navbarMobileActive : ""
        }`}
      >
        <div className={classes.navbar_top_mobile}>
          <div className={classes.left}>
            <div
              className={classes.bars}
              onClick={(e) => {
                setNavbarMobile(false);
              }}
            >
              <span></span>
              <span></span>
            </div>
            <Link to={"/likes"}>
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7965 3.27615C10.1877 2.73743 7.85542 0.801656 5.79016 0.82144C3.67352 0.841984 0.406316 2.20478 0.681891 6.24296C0.92555 9.81014 10.6345 17.1454 10.6345 17.1454C10.6953 17.1895 10.7583 17.1895 10.8237 17.1454C10.8237 17.1454 20.5327 9.80938 20.7763 6.24296C21.0519 2.20478 17.7847 0.841984 15.6673 0.82144C13.2689 0.798612 10.51 3.41312 10.51 3.41312L8.637 5.29182"
                  stroke="white"
                  strokeMiterlimit="3.8637"
                />
              </svg>
              <span>0</span>
            </Link>
          </div>
          <div className={classes.center}>
            <Link to="/">
              <img src="/images/mobile_logo_white.png" alt="" />
            </Link>
          </div>
          <div className={classes.right}>
            <div className={classes.LikeAndCard}>
              <Link
                to={"#"}
                onClick={(e) => {
                  setCard(true);
                }}
              >
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.67929 20.8598H0.499023V4.50195H3.73406"
                    stroke="#fff"
                    strokeMiterlimit="3.8637"
                  ></path>
                  <path
                    d="M5.89062 5.18856C5.89062 5.18856 5.89062 5.36384 5.89062 3.76822C5.89062 2.17355 7.09758 0.880859 8.58649 0.880859C10.0754 0.880859 11.2824 2.17355 11.2824 3.76822C11.2824 5.36288 11.2824 5.18856 11.2824 5.18856"
                    stroke="#fff"
                    strokeMiterlimit="3.8637"
                  ></path>
                  <path
                    d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z"
                    fill="#E1C4A9"
                  ></path>
                  <path
                    d="M3.75879 4.50195H19.499V20.8598H3.75879V4.50195Z"
                    stroke="#fff"
                    strokeMiterlimit="3.8637"
                  ></path>
                  <path
                    d="M9.12598 6.27259C9.12598 6.27259 9.12598 4.90562 9.12598 3.47365C9.12598 2.04167 10.3329 0.880859 11.8218 0.880859C13.3108 0.880859 14.5177 2.04167 14.5177 3.47365C14.5177 4.90562 14.5177 6.27259 14.5177 6.27259"
                    stroke="#fff"
                    strokeMiterlimit="3.8637"
                  ></path>
                </svg>
                <span>2</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.Accordion_big_div}>
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
                          open ? classes.accordion_active_span : ""
                        }`}
                      >
                        <svg
                          width="10"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.434315 14.9343C0.121895 15.2467 0.121895 15.7533 0.434315 16.0657C0.746734 16.3781 1.25327 16.3781 1.56569 16.0657L0.434315 14.9343ZM8 8.5L8.56568 9.06568L9.13137 8.5L8.56568 7.93431L8 8.5ZM1.56568 0.934315C1.25327 0.621895 0.746733 0.621895 0.434314 0.934315C0.121895 1.24673 0.121895 1.75327 0.434314 2.06569L1.56568 0.934315ZM1.56569 16.0657L8.56568 9.06568L7.43431 7.93431L0.434315 14.9343L1.56569 16.0657ZM8.56568 7.93431L1.56568 0.934315L0.434314 2.06569L7.43431 9.06568L8.56568 7.93431Z"
                            fill="white"
                          />
                        </svg>
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
        <div className={classes.navbar_mobile_bottom}>
          <h5>ОТЗЫВЫ</h5>
          <ul>
            <li>
              <Link to={"/"}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 16L1.63003 11.8913C0.932722 10.6887 0.566315 9.32533 0.566985 7.92733C0.568994 3.55667 4.14264 0 8.53349 0C10.6643 0.000666667 12.6644 0.826667 14.1689 2.32533C15.6727 3.824 16.5007 5.816 16.5 7.93467C16.498 12.306 12.9243 15.8627 8.53349 15.8627C7.20049 15.862 5.88692 15.5293 4.72339 14.8973L0.5 16ZM4.91899 13.462C6.04166 14.1253 7.11341 14.5227 8.53081 14.5233C12.1801 14.5233 15.1529 11.5673 15.1549 7.93333C15.1563 4.292 12.1976 1.34 8.53617 1.33867C4.88416 1.33867 1.91338 4.29467 1.91204 7.928C1.91137 9.41133 2.34811 10.522 3.0816 11.684L2.41242 14.116L4.91899 13.462ZM12.5466 9.81933C12.497 9.73667 12.3644 9.68733 12.1647 9.588C11.9658 9.48867 10.9871 9.00933 10.8043 8.94333C10.6221 8.87733 10.4894 8.844 10.3561 9.04267C10.2235 9.24067 9.84171 9.68733 9.72582 9.81933C9.60994 9.95133 9.49338 9.968 9.29444 9.86867C9.09549 9.76933 8.45378 9.56067 7.6935 8.88533C7.10203 8.36 6.70213 7.71133 6.58624 7.51267C6.47036 7.31467 6.57418 7.20733 6.67332 7.10867C6.76308 7.02 6.87227 6.87733 6.97207 6.76133C7.07322 6.64667 7.10604 6.564 7.17303 6.43133C7.23934 6.29933 7.20652 6.18333 7.15628 6.084C7.10604 5.98533 6.70815 5.01 6.5427 4.61333C6.3806 4.22733 6.21649 4.27933 6.09457 4.27333L5.71276 4.26667C5.58013 4.26667 5.36444 4.316 5.18224 4.51467C5.00004 4.71333 4.4856 5.192 4.4856 6.16733C4.4856 7.14267 5.19899 8.08467 5.29812 8.21667C5.39793 8.34867 6.70146 10.35 8.69827 11.208C9.1732 11.412 9.54429 11.534 9.833 11.6253C10.3099 11.776 10.744 11.7547 11.087 11.704C11.4694 11.6473 12.2645 11.2247 12.4307 10.762C12.5968 10.2987 12.5968 9.902 12.5466 9.81933Z"
                    fill="white"
                  />
                </svg>
                WhatsApp
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.1 0H14.9C15.7837 0 16.5 0.716344 16.5 1.6V14.4C16.5 15.2837 15.7837 16 14.9 16H2.1C1.21634 16 0.5 15.2837 0.5 14.4V1.6C0.5 0.716344 1.21634 0 2.1 0ZM2.10002 1.59993V14.3999H14.9V1.59993H2.10002ZM7.80646 8.00347H9.30001V12.8H10.9V8.00347H12.4859V6.40347H10.9V5.59995C10.9 5.15812 11.2582 4.79995 11.7 4.79995H12.5V3.19995H11.7C10.3745 3.19995 9.30001 4.27447 9.30001 5.59995V6.40347H7.80646V8.00347Z"
                    fill="white"
                  />
                </svg>
                Facebook
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1674 0.00163822C16.9451 0.017643 16.7269 0.0692518 16.5213 0.154451H16.5186C16.3212 0.231886 15.3829 0.622484 13.9565 1.21455L8.84466 3.34503C5.17666 4.87316 1.57099 6.37799 1.57099 6.37799L1.61392 6.36154C1.61392 6.36154 1.36533 6.4424 1.10565 6.61852C0.945227 6.71954 0.807181 6.85172 0.699867 7.00706C0.572453 7.19208 0.469968 7.47509 0.508054 7.7677C0.570376 8.26246 0.89445 8.55917 1.12712 8.72295C1.36256 8.88878 1.58692 8.96622 1.58692 8.96622H1.59246L4.97377 10.0935C5.12542 10.5752 6.00416 13.4341 6.21536 14.0927C6.34001 14.486 6.46119 14.732 6.61284 14.9198C6.68624 15.0157 6.77211 15.0959 6.87529 15.1603C6.92892 15.1912 6.98612 15.2156 7.04563 15.2329L7.01101 15.2247C7.0214 15.2274 7.02971 15.2357 7.03732 15.2384C7.06502 15.2459 7.08372 15.2487 7.11903 15.2542C7.65431 15.4145 8.08433 15.0856 8.08433 15.0856L8.10857 15.0664L10.105 13.2676L13.4509 15.8079L13.5271 15.8401C14.2244 16.143 14.9308 15.9744 15.304 15.677C15.68 15.3775 15.8261 14.9945 15.8261 14.9945L15.8503 14.9328L18.436 1.82443C18.5094 1.50099 18.5281 1.1981 18.4471 0.904127C18.3635 0.606604 18.1706 0.350715 17.9063 0.186658C17.6843 0.0531115 17.4269 -0.0113485 17.1674 0.00163822ZM17.0975 1.40642C17.0947 1.44959 17.103 1.4448 17.0836 1.52771V1.53525L14.5222 14.5072C14.5111 14.5257 14.4924 14.5662 14.4412 14.6066C14.3872 14.6491 14.3442 14.6758 14.1192 14.5874L10.0267 11.4825L7.5546 13.7123L8.07395 10.4299L14.7604 4.26259C15.036 4.00904 14.9439 3.95559 14.9439 3.95559C14.9633 3.64448 14.5277 3.86445 14.5277 3.86445L6.09626 9.03337L6.09349 9.01967L2.05225 7.67313V7.67039L2.04187 7.66833C2.04895 7.66601 2.05589 7.66326 2.06264 7.66011L2.0848 7.64915L2.10627 7.64161C2.10627 7.64161 5.71471 6.13678 9.38271 4.60865C11.2191 3.84321 13.0694 3.07229 14.4924 2.47749C15.9154 1.88611 16.9673 1.45234 17.0268 1.42904C17.0836 1.40711 17.0566 1.40711 17.0975 1.40711V1.40642Z"
                    fill="white"
                  />
                </svg>
                Telegram
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.3"
                    y="0.8"
                    width="16.4"
                    height="13.4"
                    rx="1.2"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M1.5 2.5L9.5 8.5L17.5 2.5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
                E-mail
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${classes.bg_card} ${card ? classes.bg_card_active : ""}`}
        onClick={(e) => {
          setCard(false);
        }}
      ></div>
      <Card card={card} />
    </>
  );
}

export default Navbar;
