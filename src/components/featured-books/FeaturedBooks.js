/* eslint-disable jsx-a11y/img-redundant-alt */
import "./featuredBooks.scss";
import React from "react";
import { Link } from "react-router-dom";
import featuredImage1 from "assets/img/big-magic-cover_euc3rh.jpg";
import { UnderlinedSectionHeaderTitle, UserFeedBack } from "components";

const FeaturedBooks = () => {
  return (
    <section className="featured">
      <UnderlinedSectionHeaderTitle title="Featured Books" />
      <div className="featuredBooks">
        <section className="carousel">
          <div className="container--grid">
            <article className="featuredBook">
              <Link to="/books/id">
                <span className="featuredBook__imageBox">
                  <img
                    className="featuredBook__image"
                    src={featuredImage1}
                    alt="featured picture One"
                  />
                </span>
                <span className="featuredBook__hoverCard">
                  <span className="isAvailable featuredBook__item">
                    Available
                  </span>

                  <span className="featuredBook__item ">
                    <span className="bookTitle fw-600 .lg-font-size">
                      Big Magic
                    </span>
                    <span className="author fw-100 sm-font-size">
                      Elizabeth Gilbert
                    </span>
                    <span className="publishedYear fw-100 sm-font-size">
                      2016
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre fw-500 sm-font-size">
                      Genre
                    </label>
                    <span className="bookGenre__category sm-font-size fw-100">
                      Motivational
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag fw-500">Tags</label>
                    <span className="bookTag__category sm-font-size">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <UserFeedBack className="featuredBook__item" />
                </span>
              </Link>
            </article>
          </div>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
        <div className="caret">
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
        <div className="caret">
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
    </section>
  );
};

export default FeaturedBooks;
