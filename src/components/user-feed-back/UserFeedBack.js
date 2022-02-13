import "./userFeedBack.scss";
import React from "react";
import { Purchase, Rating, Likes } from "components";

const UserFeedBack = (props) => {
  return (
    <div className={`${props.className} user-feedback-info`}>
      <div className="feedback">
        <Purchase />
        <Likes className="margn-left-sm" />
      </div>

      <Rating />
    </div>
  );
};

export default UserFeedBack;
