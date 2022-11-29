import React from "react";
import classes from "./Showroom.module.css";
import Showroom from "../Home/Showroom";
import Form from "../Home/Form";
function ShowroomPage() {
  return (
    <div className={classes.Showroom}>
      <Showroom />
      <Form />
    </div>
  );
}

export default ShowroomPage;
