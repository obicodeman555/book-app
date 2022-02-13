import React from "react";
import { Stars } from "components";
import "./rating.scss";

const Rating = () => {
  return (
    <div className="ratingInfo">
      <span className="rating">
        <span className="fw-500">Rating:</span>
        <span className="rating__count">4.0</span>
      </span>
      <Stars />
    </div>
  );
};

export default Rating;
