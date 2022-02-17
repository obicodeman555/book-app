import "./carousel.scss";
import React, { Children } from "react";
import { UnderlinedSectionHeaderTitle } from "components";
const Carousel = (props) => {
  const { children } = props;
  const displayItems = Children.map(children, (child, index) => (
    <article className="featuredBook" id={`carouselItem${index}`}>
      {child}
    </article>
  ));
  return (
    <>
      <UnderlinedSectionHeaderTitle title="Featured Books" />
      <div className="carousel">
        <div className="carousel__container">
          <div className="carousel__displayFrame">{displayItems}</div>
          <div className="caret carousel__leftArrow">
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 10.5L5.49846 0.5L0.5 5.5L5.5 10.5Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="caret carousel__rightArrow">
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 10.5L5.49846 0.5L0.5 5.5L5.5 10.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
