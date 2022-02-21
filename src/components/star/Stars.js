import React from "react";
import "./stars.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ rating }) => {
  return (
    <span className="stars">
      {/*Star */}
      <>
        {rating >= 1 ? (
          <BsStarFill />
        ) : rating >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </>
      {/**End of Star */}
      {/*Star */}
      <>
        {rating >= 2 ? (
          <BsStarFill />
        ) : rating >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </>
      {/**End of Star */}
      {/*Star */}
      <>
        {rating >= 3 ? (
          <BsStarFill />
        ) : rating >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </>
      {/**End of Star */}
      {/*Star */}
      <>
        {rating >= 4 ? (
          <BsStarFill />
        ) : rating >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </>
      {/**End of Star */}
      {/*Star */}
      <>
        {rating === 5 ? (
          <BsStarFill />
        ) : rating >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </>
      {/**End of Star */}
    </span>
  );
};

export default Stars;
