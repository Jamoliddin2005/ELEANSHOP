import React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

function Footer() {
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
      ],
    },
    {
      title: "КОНТАКТЫ",
      content: [
        {
          content: "ТЕЛ.: 8 (495) 150-14-77",
        },
        {
          content: "WHATSAPP: +7 (977) 728-27-38",
        },
        {
          content: "EMAIL: info@eleanboutique.ru",
        },
        {
          content: "г. Москва, Новая площадь 8, стр.2, 5 этаж",
        },
      ],
    },
  ];

  return (
    <div className={classes.Footer}>
      <Media query="(min-width:576px)">
        {(matches) =>
          matches ? (
            <div className="container">
              <div className={`${classes.row} row`}>
                <div className={classes.Footer_Left}>
                  <Link to="/">
                    <svg
                      width="124"
                      height="23"
                      viewBox="0 0 124 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M83.1165 15.1942V14.5196H87.2429L83.1165 2.99292V0.000294635H85.4413L93.1816 20.8428L95.8516 22.2828V22.5827H86.9733V22.2828L89.519 20.8268L87.4964 15.1945H83.1165V15.1942ZM105.909 20.6069L108.562 22.2988V22.5824H102.607V22.2988L105.229 20.6069V1.75623L102.607 0.299893V0H107.457L120.634 18.0049V1.97557L117.98 0.2839V0.000294635H124V0.2839L121.346 1.97557V22.5824L120.348 23L105.909 3.29825V20.6069H105.909ZM0 22.2828L2.57279 20.8428V1.75653L0 0.300197V0.000294635H16.1331V5.73966H15.9875L13.2691 0.674918H5.90641V10.665H10.6802L12.5734 7.77951H12.8433V14.3057H12.5734L10.6802 11.3396H5.90641V21.9081H14.3479L17.8864 16.8274L18.0265 16.8434L17.1906 22.5827H0.000303802V22.2828H0ZM83.1165 0.000294635V2.99292L78.9905 14.5196H83.1165V15.1942H78.737L76.7302 20.8265H76.7466L80.0693 22.2825V22.5824H73.068V22.2825L75.8943 20.8425L82.5615 2.41456L81.0617 0.299893V0H83.1165V0.000294635ZM24.9601 0.000294635H33.7736V0.300197L30.8665 1.75653V21.9081H38.1374L41.6759 16.8274L41.816 16.8434L40.9801 22.5827H24.9601V22.2828L27.5329 20.8428V1.75653L24.9601 0.300197V0.000294635ZM48.6903 22.2828L51.2631 20.8428V1.75653L48.6903 0.300197V0.000294635H64.8234V5.73966H64.6778L61.9594 0.674918H54.5967V10.665H59.3702L61.2636 7.77951H61.5336V14.3057H61.2636L59.3702 11.3396H54.5967V21.9081H63.0382L66.5767 16.8274L66.7171 16.8434L65.8809 22.5827H48.6903V22.2828Z"
                        fill="#222222"
                      />
                    </svg>
                  </Link>
                  <a href="tel:8 (495) 150-14-77">ТЕЛ.: 8 (495) 150-14-77</a>
                  <a href="WHATSAPP: +7 (977) 728-27-38">
                    WHATSAPP: +7 (977) 728-27-38
                  </a>
                  <a href="mailto:info@eleanboutique.ru">
                    EMAIL: info@eleanboutique.ru
                  </a>
                </div>
                <div className={classes.Footer_Center}>
                  <ul>
                    <li>
                      <Link to={"/"}>ДОСТАВКА</Link>
                    </li>
                    <li>
                      <Link to={"/"}>ОПЛАТА </Link>
                    </li>
                    <li>
                      <Link to={"/"}>ВОЗВРАТ</Link>
                    </li>
                    <li>
                      <Link to={"/"}>РАЗМЕРНАЯ ТАБЛИЦА</Link>
                    </li>
                    <li>
                      <Link to={"/"}>ПРИМЕРКА</Link>
                    </li>
                    <li>
                      <Link to={"/"}>КОНТАКТЫ</Link>
                    </li>
                  </ul>
                  <div className={classes.footer_center_section}>
                    <p>
                      АДРЕС: <br /> г. Москва, Новая площадь 8, стр.2, 5 этаж
                    </p>
                    <p>
                      РЕЖИМ РАБОТЫ: <br /> с 9.00 до 21.00 шоурум: с 12.00 до
                      21.00
                    </p>
                  </div>
                  <div className={classes.footer_socials}>
                    <a href="/instagram.com">
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
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.30664 9.02516C4.30664 6.4336 6.40359 4.32031 8.97485 4.32031C11.5461 4.32031 13.6211 6.4336 13.6211 9.02516C13.6211 11.6159 11.5461 13.73 8.97485 13.73C6.40359 13.73 4.30664 11.6159 4.30664 9.02516ZM6.15583 9.02516C6.15583 10.5937 7.41824 11.8661 8.97485 11.8661C10.5086 11.8661 11.7719 10.5937 11.7719 9.02516C11.7719 7.4566 10.5086 6.18338 8.97485 6.18338C7.41824 6.18338 6.15583 7.4566 6.15583 9.02516Z"
                          fill="#2F2F2F"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.8469 5.52449C13.0808 5.52449 12.4492 4.88871 12.4492 4.11594C12.4492 3.31937 13.0808 2.68359 13.8469 2.68359C14.6138 2.68359 15.2454 3.31937 15.2454 4.11594C15.2454 4.88871 14.6138 5.52449 13.8469 5.52449Z"
                          fill="#2F2F2F"
                        ></path>
                      </svg>
                    </a>
                    <a href="/wk.com">
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
                        ></path>
                      </svg>
                    </a>
                    <a href="/facebook.com">
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
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className={classes.Footer_Right}>
                  <form action="">
                    <input type="text" placeholder="ИМЯ" />
                    <input type="email" placeholder="E-MAIL" />
                    <div className={classes.checkout}>
                      <input type="checkbox" name="" id="checkout" />
                      <label htmlFor="checkout">
                        <span>Я согласен</span> с политикой конфиденциальности
                      </label>
                    </div>
                    <button>
                      ПОДПИСАТЬСЯ{" "}
                      <svg
                        width="23"
                        height="8"
                        viewBox="0 0 23 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.0664 0.783203L21.9996 3.71644L19.0664 6.64967"
                          stroke="#D7B494"
                        />
                        <path d="M0 3.7168L21.2668 3.7168" stroke="#D7B494" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
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

              <Link to="" className={classes.subscribe}>
                ПОДПИСАТЬСЯ НА НОВОСТИ
              </Link>

              <div className={classes.input_subscribe}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Введите адрес электронной почты"
                />
                <button className={classes.btn_submit}>
                  <svg
                    width="23"
                    height="8"
                    viewBox="0 0 23 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0667 1L21.9999 3.93323L19.0667 6.86647"
                      stroke="#222222"
                    />
                    <path d="M0 3.93311L21.2668 3.93311" stroke="#222222" />
                  </svg>
                </button>
              </div>
              <div className={classes.footer_foot}>
                <div className={classes.left}>
                  <a href="/instagram.com">
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
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.30664 9.02516C4.30664 6.4336 6.40359 4.32031 8.97485 4.32031C11.5461 4.32031 13.6211 6.4336 13.6211 9.02516C13.6211 11.6159 11.5461 13.73 8.97485 13.73C6.40359 13.73 4.30664 11.6159 4.30664 9.02516ZM6.15583 9.02516C6.15583 10.5937 7.41824 11.8661 8.97485 11.8661C10.5086 11.8661 11.7719 10.5937 11.7719 9.02516C11.7719 7.4566 10.5086 6.18338 8.97485 6.18338C7.41824 6.18338 6.15583 7.4566 6.15583 9.02516Z"
                        fill="#2F2F2F"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.8469 5.52449C13.0808 5.52449 12.4492 4.88871 12.4492 4.11594C12.4492 3.31937 13.0808 2.68359 13.8469 2.68359C14.6138 2.68359 15.2454 3.31937 15.2454 4.11594C15.2454 4.88871 14.6138 5.52449 13.8469 5.52449Z"
                        fill="#2F2F2F"
                      ></path>
                    </svg>
                  </a>
                  <a href="/wk.com">
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
                      ></path>
                    </svg>
                  </a>
                  <a href="/facebook.com">
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
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className={classes.right}>
                  <img src="/images/logo_black.png" alt="" />
                </div>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
}

export default Footer;
