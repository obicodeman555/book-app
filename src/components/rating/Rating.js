import React from "react";
import { Stars } from "components";
import "./rating.scss";

const Rating = ({ rating }) => {
  return (
    <div className="ratingInfo">
      <span className="rating">
        <span className="fw-600">Ratings:</span>
        <span className="rating__count">{rating}</span>
      </span>
      <Stars rating={rating} />
    </div>
  );
};

export default Rating;
