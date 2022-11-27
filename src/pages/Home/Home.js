import React, { useState } from "react";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import About from "./About";
import classes from "./Home.module.css";
import Showroom from "./Showroom";
import Form from "./Form";
import Reviews from "./Reviews";
import Instagram from "./Instagram";
import Media from "react-media";

function Home() {
  const [productsLeft, setProductsLeft] = useState([
    {
      text: "Новинки",
      image: "/images/Home/11 внизу 1.png",
      active: true,
    },

    {
      text: "Смокинги",
      image: "/images/Home/Elean25sajt5 1.png",
      active: true,
    },
    {
      text: "Брюки",
      image: "/images/Home/10сбоку2 1.png",
      active: true,
    },
  ]);
  const [productsRight, setProductsRight] = useState([
    {
      text: "Акции",
      image: "/images/Home/Elean20 2.png",
      active: true,
    },
    {
      text: "Костюмы",
      image: "/images/Home/Elean20 1.png",
      active: true,
    },

    {
      text: "Платья",
      image: "/images/Home/10 сбоку 1.png",
      active: true,
    },
  ]);

  const [miniCategories, setMiniCategories] = useState([
    {
      text: "Блузы",
      image: "/images/Home/9 внизу 2.png",
      active: true,
    },
    {
      text: "Юбки",
      image: "/images/Home/elean47277-1 1.png",
      active: true,
    },
    {
      text: "Топы и жилеты",
      image: "/images/Home/15 сбоку или снизу 2.png",
      active: true,
    },
    {
      text: "Аксессуары",
      image: "/images/Home/Elean25-top 3.png",
      active: true,
    },
  ]);

  const [reviews, setReviews] = useState([
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
    {
      images: "/images/Home/IMG_4232 6.png",
      text: "Альбина Джанабаева",
    },
    {
      images: "/images/Home/IMG_4228 2.png",
      text: "Екатерина Данилова",
    },
    {
      images: "/images/Home/93B78862-6DA7-47C3-AB15-C00935398C1E 3.png",
      text: "Вера Брежнева",
    },
    {
      images: "/images/Home/IMG_4225 2.png",
      text: "Екатерина Катова",
    },
    {
      images: "/images/Home/IMG_4233 1.png",
      text: "Ирина Ургант",
    },
  ]);

  const [productMobile, setProductMobile] = useState([
    {
      text: "Новинки",
      image: "/images/Home/11 внизу 1.png",
      mini: false,
    },
    {
      text: "КОСТЮМЫ",
      image: "/images/HeaderSlider/mobile_aksii.png",
      mini: false,
    },
    {
      text: "КОСТЮМЫ",
      image: "/images/Home/Elean20 1.png",
      mini: true,
    },
    {
      text: "СМОКИНГИ",
      image: "/images/Home/Elean25sajt5 1.png",
      mini: true,
    },
    {
      text: "БРЮКИ",
      image: "/images/HeaderSlider/10сбоку2 2.png",
      mini: false,
    },
    {
      text: "ПЛАТЬЯ",
      image: "/images/HeaderSlider/10 сбоку 2.png",
      mini: false,
    },
  ]);

  return (
    <div className={classes.Home}>
      <HeaderSlider />
      <Media query="(min-width:576px)">
        {(matches) =>
          matches ? (
            <section className={classes.home_section}>
              <div className="container">
                <div className={`${classes.row} row`}>
                  <div className={classes.section_left}>
                    {productsLeft.map((item, index) => (
                      <div className={classes.product_category} key={index}>
                        <h4>{item.text}</h4>
                        <img src={item.image} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className={classes.section_right}>
                    {productsRight.map((item, index) => (
                      <div className={classes.product_category} key={index}>
                        <h4>{item.text}</h4>
                        <img src={item.image} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={classes.mini_categories}>
                  {miniCategories.map((item, index) => (
                    <div className={classes.product_category} key={index}>
                      <h4>{item.text}</h4>
                      <img src={item.image} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className={classes.home_section}>
              {productMobile.map((item, index) => (
                <div
                  className={`${classes.product_category} ${
                    item.mini ? classes.mini : ""
                  }`}
                  key={index}
                >
                  <h4>{item.text}</h4>
                  <img src={item.image} alt="" />
                </div>
              ))}
              <div className={classes.mini_categories}>
                {miniCategories.map((item, index) => (
                  <div className={classes.product_category} key={index}>
                    <h4>{item.text}</h4>
                    <img src={item.image} alt="" />
                  </div>
                ))}
              </div>
            </section>
          )
        }
      </Media>
      <About />
      <Showroom />
      <Form SvgForm={true} />
      <Reviews reviews={reviews} home={true} />
      <Instagram />
    </div>
  );
}

export default Home;
