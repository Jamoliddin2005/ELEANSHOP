import React, { useState } from "react";
import classes from "./Instagram.module.css";

function Instagram() {
  const [profile, setProfile] = useState([
    {
      image: "/images/Home/IMG_4223 2.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4226 1.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4227 1.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4234 1.png",
      profile: "/images/Home/profile.png",
    },
    {
      image: "/images/Home/IMG_4222 3.png",
      profile: "/images/Home/profile.png",
    },
  ]);
  return (
    <div className={classes.Instagram_classes}>
      <div className="container">
        <h2>мы в Инстаграм</h2>
        <div className={classes.instagram_blog}>
          {profile.map((item, index) => (
            <div className={classes.profile_account} key={index}>
              <img src={item.image} alt="" />
              <img src={item.profile} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instagram;
