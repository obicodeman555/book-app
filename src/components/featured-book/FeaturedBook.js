/* eslint-disable jsx-a11y/img-redundant-alt */
import "./featuredBook.scss";
import React from "react";
import { Link } from "react-router-dom";
import featuredImage1 from "assets/img/big-magic-cover_euc3rh.jpg";
// import featuredImage2 from "assets/img/from-blood-and-ash_hs4leq.jpg";
// import { UnderlinedSectionHeaderTitle, Carousel } from "components";
import { UserFeedBack } from "components";

const FeaturedBook = () => {
  return (
    <Link to="/books/id" className="featuredBookLinked">
      <span className="featuredBook__imageBox">
        <img
          className="featuredBook__image"
          src={featuredImage1}
          alt="featured picture One"
        />
        <span className="featuredBook__hoverCard">
          <span className="isAvailable featuredBook__item">Available</span>

          <span className="featuredBook__item ">
            <span className="bookTitle fw-600">Big Magic</span>
            <span className="author fw-600">Elizabeth Gilbert</span>
            <span className="publishedYear fw-100">2016</span>
          </span>
          <span className="featuredBook__item">
            <label className="bookGenre fw-600">Genre</label>
            <span className="bookGenre__category fw-100">Motivational</span>
          </span>
          <span className="featuredBook__item">
            <label className="bookTag fw-600">Tags</label>
            <span className="bookTag__category">Creativity, Beter Living</span>
          </span>
          <UserFeedBack className="featuredBook__item" />
        </span>
      </span>
    </Link>
  );
};

export default FeaturedBook;
