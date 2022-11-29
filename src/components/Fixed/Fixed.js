import React from "react";
import { Link } from "react-router-dom";
import classes from "./Fixed.module.css";

function Fixed() {
  const WindowTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={classes.Fixed}>
      <div
        className={classes.fixed_top}
        onClick={() => {
          WindowTop();
        }}
      >
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
          ></rect>
          <rect
            x="24"
            y="3"
            width="1"
            height="1"
            transform="rotate(90 24 3)"
            fill="#C0C0C0"
          ></rect>
          <rect
            x="24"
            y="1"
            width="1"
            height="1"
            transform="rotate(90 24 1)"
            fill="#C0C0C0"
          ></rect>
          <rect
            x="23"
            y="4"
            width="1"
            height="1"
            transform="rotate(90 23 4)"
            fill="#C0C0C0"
          ></rect>
          <rect
            x="23"
            width="1"
            height="1"
            transform="rotate(90 23 0)"
            fill="#C0C0C0"
          ></rect>
        </svg>
        / <span>вверх</span>
      </div>
      <div className={classes.fixed_bottom}>
        <Link to={"/"}>
          <img src="/images/fixed1.png" alt="" />
        </Link>
        <Link to={"/"}>
          <img src="/images/fixed2.png" alt="" />
          <span>1</span>
        </Link>
      </div>
    </div>
  );
}

export default Fixed;
