import React from "react";
import classes from "./Showroom.module.css";

function Showroom() {
  return (
    <div className={classes.Showroom}>
      <div className="container">
        <h2>НАШ ШОУРУМ</h2>
        <div className="row">
          <div className={classes.card}>
            <img src="/images/Home/photo_2021-03-01_12-42-51.png" alt="" />
          </div>
          <div className={classes.card}>
            <img src="/images/Home/photo_2021-03-01_12-42-43 (2).png" alt="" />
          </div>
          <div className={classes.card}>
            <img src="/images/Home/photo_2021-03-01_12-42-43.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showroom;
