import "./userFeedBack.scss";
import React from "react";
import { Purchase, Rating, Likes } from "components";

const UserFeedBack = (props) => {
  // const { likes, number_0f_purchases } = props.book;
  return (
    <div className={`${props.className} user-feedback-info`}>
      <div className="feedback">
        <Purchase purchases={props.purchases} />
        <Likes className="margn-left-sm" likes={props.likes} />
      </div>

      <Rating rating={props.rating} />
    </div>
  );
};

export default UserFeedBack;
