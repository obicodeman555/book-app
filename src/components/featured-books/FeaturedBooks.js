/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./featuredBooks.scss";
import { UnderlinedSectionHeaderTitle, Stars } from "components";
import featuredImage1 from "assets/img/big-magic-cover_euc3rh.jpg";

import { Link } from "react-router-dom";

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
                    <span className="bookTitle">Big Magic</span>
                    <span className="author">Elizabeth Gilbert</span>
                    <span className="publishedYear">2016</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre">Genre</label>
                    <span className="bookGenre__category">Motivational</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag">Tags</label>
                    <span className="bookTag__category">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <span className="feedback">
                      <span className="purchase">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4659 19C13.8847 19 14.2243 18.6593 14.2243 18.2391C14.2243 17.1103 13.8931 16.059 13.323 15.1778C14.0477 14.5265 15.005 14.1304 16.0545 14.1304C18.3163 14.1304 20.1499 15.97 20.1499 18.2391C20.1499 18.6593 20.4894 19 20.9083 19C21.3271 19 21.6667 18.6593 21.6667 18.2391C21.6667 15.1295 19.154 12.6087 16.0545 12.6087C14.6269 12.6087 13.3238 13.1435 12.3333 14.0243C11.3429 13.1435 10.0398 12.6087 8.61213 12.6087C5.51264 12.6087 3 15.1295 3 18.2391C3 18.6593 3.33955 19 3.7584 19C4.17725 19 4.51679 18.6593 4.51679 18.2391C4.51679 15.97 6.35034 14.1304 8.61213 14.1304C9.66164 14.1304 10.6189 14.5265 11.3436 15.1778C10.7735 16.059 10.4424 17.1103 10.4424 18.2391C10.4424 18.6593 10.7819 19 11.2008 19C11.6196 19 11.9592 18.6593 11.9592 18.2391C11.9592 17.6258 12.0932 17.0438 12.3333 16.5211C12.5735 17.0438 12.7075 17.6258 12.7075 18.2391C12.7075 18.6593 13.047 19 13.4659 19ZM8.61213 12C6.68542 12 5.12351 10.433 5.12351 8.5C5.12351 6.567 6.68542 5 8.61213 5C10.5388 5 12.1008 6.567 12.1008 8.5C12.1008 10.433 10.5388 12 8.61213 12ZM8.61213 10.4783C9.70115 10.4783 10.584 9.59256 10.584 8.5C10.584 7.40744 9.70115 6.52174 8.61213 6.52174C7.52312 6.52174 6.6403 7.40744 6.6403 8.5C6.6403 9.59256 7.52312 10.4783 8.61213 10.4783ZM16.0545 10.4783C17.1435 10.4783 18.0264 9.59256 18.0264 8.5C18.0264 7.40744 17.1435 6.52174 16.0545 6.52174C14.9655 6.52174 14.0827 7.40744 14.0827 8.5C14.0827 9.59256 14.9655 10.4783 16.0545 10.4783ZM16.0545 12C14.1278 12 12.5659 10.433 12.5659 8.5C12.5659 6.567 14.1278 5 16.0545 5C17.9812 5 19.5432 6.567 19.5432 8.5C19.5432 10.433 17.9812 12 16.0545 12Z"
                            fill="black"
                          />
                        </svg>

                        <span className="purchase__number">31</span>
                      </span>
                      <span className="likes">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
                            fill="black"
                          />
                        </svg>
                        <span className="likes__number">29</span>
                      </span>
                    </span>

                    <span className="ratingInfo">
                      <span className="rating">
                        <span>Ratings:</span>
                        <span>4.0</span>
                      </span>
                      <Stars />
                    </span>
                  </span>
                </span>
              </Link>
            </article>
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
                    <span className="bookTitle">Big Magic</span>
                    <span className="author">Elizabeth Gilbert</span>
                    <span className="publishedYear">2016</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre">Genre</label>
                    <span className="bookGenre__category">Motivational</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag">Tags</label>
                    <span className="bookTag__category">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <span className="feedback">
                      <span className="purchase">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4659 19C13.8847 19 14.2243 18.6593 14.2243 18.2391C14.2243 17.1103 13.8931 16.059 13.323 15.1778C14.0477 14.5265 15.005 14.1304 16.0545 14.1304C18.3163 14.1304 20.1499 15.97 20.1499 18.2391C20.1499 18.6593 20.4894 19 20.9083 19C21.3271 19 21.6667 18.6593 21.6667 18.2391C21.6667 15.1295 19.154 12.6087 16.0545 12.6087C14.6269 12.6087 13.3238 13.1435 12.3333 14.0243C11.3429 13.1435 10.0398 12.6087 8.61213 12.6087C5.51264 12.6087 3 15.1295 3 18.2391C3 18.6593 3.33955 19 3.7584 19C4.17725 19 4.51679 18.6593 4.51679 18.2391C4.51679 15.97 6.35034 14.1304 8.61213 14.1304C9.66164 14.1304 10.6189 14.5265 11.3436 15.1778C10.7735 16.059 10.4424 17.1103 10.4424 18.2391C10.4424 18.6593 10.7819 19 11.2008 19C11.6196 19 11.9592 18.6593 11.9592 18.2391C11.9592 17.6258 12.0932 17.0438 12.3333 16.5211C12.5735 17.0438 12.7075 17.6258 12.7075 18.2391C12.7075 18.6593 13.047 19 13.4659 19ZM8.61213 12C6.68542 12 5.12351 10.433 5.12351 8.5C5.12351 6.567 6.68542 5 8.61213 5C10.5388 5 12.1008 6.567 12.1008 8.5C12.1008 10.433 10.5388 12 8.61213 12ZM8.61213 10.4783C9.70115 10.4783 10.584 9.59256 10.584 8.5C10.584 7.40744 9.70115 6.52174 8.61213 6.52174C7.52312 6.52174 6.6403 7.40744 6.6403 8.5C6.6403 9.59256 7.52312 10.4783 8.61213 10.4783ZM16.0545 10.4783C17.1435 10.4783 18.0264 9.59256 18.0264 8.5C18.0264 7.40744 17.1435 6.52174 16.0545 6.52174C14.9655 6.52174 14.0827 7.40744 14.0827 8.5C14.0827 9.59256 14.9655 10.4783 16.0545 10.4783ZM16.0545 12C14.1278 12 12.5659 10.433 12.5659 8.5C12.5659 6.567 14.1278 5 16.0545 5C17.9812 5 19.5432 6.567 19.5432 8.5C19.5432 10.433 17.9812 12 16.0545 12Z"
                            fill="black"
                          />
                        </svg>

                        <span className="purchase__number">31</span>
                      </span>
                      <span className="likes">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
                            fill="black"
                          />
                        </svg>
                        <span className="likes__number">29</span>
                      </span>
                    </span>

                    <span className="ratingInfo">
                      <span className="rating">
                        <span>Ratings:</span>
                        <span>4.0</span>
                      </span>
                      <Stars />
                    </span>
                  </span>
                </span>
              </Link>
            </article>
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
                    <span className="bookTitle">Big Magic</span>
                    <span className="author">Elizabeth Gilbert</span>
                    <span className="publishedYear">2016</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre">Genre</label>
                    <span className="bookGenre__category">Motivational</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag">Tags</label>
                    <span className="bookTag__category">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <span className="feedback">
                      <span className="purchase">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4659 19C13.8847 19 14.2243 18.6593 14.2243 18.2391C14.2243 17.1103 13.8931 16.059 13.323 15.1778C14.0477 14.5265 15.005 14.1304 16.0545 14.1304C18.3163 14.1304 20.1499 15.97 20.1499 18.2391C20.1499 18.6593 20.4894 19 20.9083 19C21.3271 19 21.6667 18.6593 21.6667 18.2391C21.6667 15.1295 19.154 12.6087 16.0545 12.6087C14.6269 12.6087 13.3238 13.1435 12.3333 14.0243C11.3429 13.1435 10.0398 12.6087 8.61213 12.6087C5.51264 12.6087 3 15.1295 3 18.2391C3 18.6593 3.33955 19 3.7584 19C4.17725 19 4.51679 18.6593 4.51679 18.2391C4.51679 15.97 6.35034 14.1304 8.61213 14.1304C9.66164 14.1304 10.6189 14.5265 11.3436 15.1778C10.7735 16.059 10.4424 17.1103 10.4424 18.2391C10.4424 18.6593 10.7819 19 11.2008 19C11.6196 19 11.9592 18.6593 11.9592 18.2391C11.9592 17.6258 12.0932 17.0438 12.3333 16.5211C12.5735 17.0438 12.7075 17.6258 12.7075 18.2391C12.7075 18.6593 13.047 19 13.4659 19ZM8.61213 12C6.68542 12 5.12351 10.433 5.12351 8.5C5.12351 6.567 6.68542 5 8.61213 5C10.5388 5 12.1008 6.567 12.1008 8.5C12.1008 10.433 10.5388 12 8.61213 12ZM8.61213 10.4783C9.70115 10.4783 10.584 9.59256 10.584 8.5C10.584 7.40744 9.70115 6.52174 8.61213 6.52174C7.52312 6.52174 6.6403 7.40744 6.6403 8.5C6.6403 9.59256 7.52312 10.4783 8.61213 10.4783ZM16.0545 10.4783C17.1435 10.4783 18.0264 9.59256 18.0264 8.5C18.0264 7.40744 17.1435 6.52174 16.0545 6.52174C14.9655 6.52174 14.0827 7.40744 14.0827 8.5C14.0827 9.59256 14.9655 10.4783 16.0545 10.4783ZM16.0545 12C14.1278 12 12.5659 10.433 12.5659 8.5C12.5659 6.567 14.1278 5 16.0545 5C17.9812 5 19.5432 6.567 19.5432 8.5C19.5432 10.433 17.9812 12 16.0545 12Z"
                            fill="black"
                          />
                        </svg>

                        <span className="purchase__number">31</span>
                      </span>
                      <span className="likes">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
                            fill="black"
                          />
                        </svg>
                        <span className="likes__number">29</span>
                      </span>
                    </span>

                    <span className="ratingInfo">
                      <span className="rating">
                        <span>Ratings:</span>
                        <span>4.0</span>
                      </span>
                      <Stars />
                    </span>
                  </span>
                </span>
              </Link>
            </article>
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
                    <span className="bookTitle">Big Magic</span>
                    <span className="author">Elizabeth Gilbert</span>
                    <span className="publishedYear">2016</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre">Genre</label>
                    <span className="bookGenre__category">Motivational</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag">Tags</label>
                    <span className="bookTag__category">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <span className="feedback">
                      <span className="purchase">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4659 19C13.8847 19 14.2243 18.6593 14.2243 18.2391C14.2243 17.1103 13.8931 16.059 13.323 15.1778C14.0477 14.5265 15.005 14.1304 16.0545 14.1304C18.3163 14.1304 20.1499 15.97 20.1499 18.2391C20.1499 18.6593 20.4894 19 20.9083 19C21.3271 19 21.6667 18.6593 21.6667 18.2391C21.6667 15.1295 19.154 12.6087 16.0545 12.6087C14.6269 12.6087 13.3238 13.1435 12.3333 14.0243C11.3429 13.1435 10.0398 12.6087 8.61213 12.6087C5.51264 12.6087 3 15.1295 3 18.2391C3 18.6593 3.33955 19 3.7584 19C4.17725 19 4.51679 18.6593 4.51679 18.2391C4.51679 15.97 6.35034 14.1304 8.61213 14.1304C9.66164 14.1304 10.6189 14.5265 11.3436 15.1778C10.7735 16.059 10.4424 17.1103 10.4424 18.2391C10.4424 18.6593 10.7819 19 11.2008 19C11.6196 19 11.9592 18.6593 11.9592 18.2391C11.9592 17.6258 12.0932 17.0438 12.3333 16.5211C12.5735 17.0438 12.7075 17.6258 12.7075 18.2391C12.7075 18.6593 13.047 19 13.4659 19ZM8.61213 12C6.68542 12 5.12351 10.433 5.12351 8.5C5.12351 6.567 6.68542 5 8.61213 5C10.5388 5 12.1008 6.567 12.1008 8.5C12.1008 10.433 10.5388 12 8.61213 12ZM8.61213 10.4783C9.70115 10.4783 10.584 9.59256 10.584 8.5C10.584 7.40744 9.70115 6.52174 8.61213 6.52174C7.52312 6.52174 6.6403 7.40744 6.6403 8.5C6.6403 9.59256 7.52312 10.4783 8.61213 10.4783ZM16.0545 10.4783C17.1435 10.4783 18.0264 9.59256 18.0264 8.5C18.0264 7.40744 17.1435 6.52174 16.0545 6.52174C14.9655 6.52174 14.0827 7.40744 14.0827 8.5C14.0827 9.59256 14.9655 10.4783 16.0545 10.4783ZM16.0545 12C14.1278 12 12.5659 10.433 12.5659 8.5C12.5659 6.567 14.1278 5 16.0545 5C17.9812 5 19.5432 6.567 19.5432 8.5C19.5432 10.433 17.9812 12 16.0545 12Z"
                            fill="black"
                          />
                        </svg>

                        <span className="purchase__number">31</span>
                      </span>
                      <span className="likes">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
                            fill="black"
                          />
                        </svg>
                        <span className="likes__number">29</span>
                      </span>
                    </span>

                    <span className="ratingInfo">
                      <span className="rating">
                        <span>Ratings:</span>
                        <span>4.0</span>
                      </span>
                      <Stars />
                    </span>
                  </span>
                </span>
              </Link>
            </article>
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
                    <span className="bookTitle">Big Magic</span>
                    <span className="author">Elizabeth Gilbert</span>
                    <span className="publishedYear">2016</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre">Genre</label>
                    <span className="bookGenre__category">Motivational</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag">Tags</label>
                    <span className="bookTag__category">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <span className="feedback">
                      <span className="purchase">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4659 19C13.8847 19 14.2243 18.6593 14.2243 18.2391C14.2243 17.1103 13.8931 16.059 13.323 15.1778C14.0477 14.5265 15.005 14.1304 16.0545 14.1304C18.3163 14.1304 20.1499 15.97 20.1499 18.2391C20.1499 18.6593 20.4894 19 20.9083 19C21.3271 19 21.6667 18.6593 21.6667 18.2391C21.6667 15.1295 19.154 12.6087 16.0545 12.6087C14.6269 12.6087 13.3238 13.1435 12.3333 14.0243C11.3429 13.1435 10.0398 12.6087 8.61213 12.6087C5.51264 12.6087 3 15.1295 3 18.2391C3 18.6593 3.33955 19 3.7584 19C4.17725 19 4.51679 18.6593 4.51679 18.2391C4.51679 15.97 6.35034 14.1304 8.61213 14.1304C9.66164 14.1304 10.6189 14.5265 11.3436 15.1778C10.7735 16.059 10.4424 17.1103 10.4424 18.2391C10.4424 18.6593 10.7819 19 11.2008 19C11.6196 19 11.9592 18.6593 11.9592 18.2391C11.9592 17.6258 12.0932 17.0438 12.3333 16.5211C12.5735 17.0438 12.7075 17.6258 12.7075 18.2391C12.7075 18.6593 13.047 19 13.4659 19ZM8.61213 12C6.68542 12 5.12351 10.433 5.12351 8.5C5.12351 6.567 6.68542 5 8.61213 5C10.5388 5 12.1008 6.567 12.1008 8.5C12.1008 10.433 10.5388 12 8.61213 12ZM8.61213 10.4783C9.70115 10.4783 10.584 9.59256 10.584 8.5C10.584 7.40744 9.70115 6.52174 8.61213 6.52174C7.52312 6.52174 6.6403 7.40744 6.6403 8.5C6.6403 9.59256 7.52312 10.4783 8.61213 10.4783ZM16.0545 10.4783C17.1435 10.4783 18.0264 9.59256 18.0264 8.5C18.0264 7.40744 17.1435 6.52174 16.0545 6.52174C14.9655 6.52174 14.0827 7.40744 14.0827 8.5C14.0827 9.59256 14.9655 10.4783 16.0545 10.4783ZM16.0545 12C14.1278 12 12.5659 10.433 12.5659 8.5C12.5659 6.567 14.1278 5 16.0545 5C17.9812 5 19.5432 6.567 19.5432 8.5C19.5432 10.433 17.9812 12 16.0545 12Z"
                            fill="black"
                          />
                        </svg>

                        <span className="purchase__number">31</span>
                      </span>
                      <span className="likes">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
                            fill="black"
                          />
                        </svg>
                        <span className="likes__number">29</span>
                      </span>
                    </span>

                    <span className="ratingInfo">
                      <span className="rating">
                        <span>Ratings:</span>
                        <span>4.0</span>
                      </span>
                      <Stars />
                    </span>
                  </span>
                </span>
              </Link>
            </article>
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
                    <span className="bookTitle">Big Magic</span>
                    <span className="author">Elizabeth Gilbert</span>
                    <span className="publishedYear">2016</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookGenre">Genre</label>
                    <span className="bookGenre__category">Motivational</span>
                  </span>
                  <span className="featuredBook__item">
                    <label className="bookTag">Tags</label>
                    <span className="bookTag__category">
                      Creativity, Beter Living
                    </span>
                  </span>
                  <span className="featuredBook__item">
                    <span className="feedback">
                      <span className="purchase">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4659 19C13.8847 19 14.2243 18.6593 14.2243 18.2391C14.2243 17.1103 13.8931 16.059 13.323 15.1778C14.0477 14.5265 15.005 14.1304 16.0545 14.1304C18.3163 14.1304 20.1499 15.97 20.1499 18.2391C20.1499 18.6593 20.4894 19 20.9083 19C21.3271 19 21.6667 18.6593 21.6667 18.2391C21.6667 15.1295 19.154 12.6087 16.0545 12.6087C14.6269 12.6087 13.3238 13.1435 12.3333 14.0243C11.3429 13.1435 10.0398 12.6087 8.61213 12.6087C5.51264 12.6087 3 15.1295 3 18.2391C3 18.6593 3.33955 19 3.7584 19C4.17725 19 4.51679 18.6593 4.51679 18.2391C4.51679 15.97 6.35034 14.1304 8.61213 14.1304C9.66164 14.1304 10.6189 14.5265 11.3436 15.1778C10.7735 16.059 10.4424 17.1103 10.4424 18.2391C10.4424 18.6593 10.7819 19 11.2008 19C11.6196 19 11.9592 18.6593 11.9592 18.2391C11.9592 17.6258 12.0932 17.0438 12.3333 16.5211C12.5735 17.0438 12.7075 17.6258 12.7075 18.2391C12.7075 18.6593 13.047 19 13.4659 19ZM8.61213 12C6.68542 12 5.12351 10.433 5.12351 8.5C5.12351 6.567 6.68542 5 8.61213 5C10.5388 5 12.1008 6.567 12.1008 8.5C12.1008 10.433 10.5388 12 8.61213 12ZM8.61213 10.4783C9.70115 10.4783 10.584 9.59256 10.584 8.5C10.584 7.40744 9.70115 6.52174 8.61213 6.52174C7.52312 6.52174 6.6403 7.40744 6.6403 8.5C6.6403 9.59256 7.52312 10.4783 8.61213 10.4783ZM16.0545 10.4783C17.1435 10.4783 18.0264 9.59256 18.0264 8.5C18.0264 7.40744 17.1435 6.52174 16.0545 6.52174C14.9655 6.52174 14.0827 7.40744 14.0827 8.5C14.0827 9.59256 14.9655 10.4783 16.0545 10.4783ZM16.0545 12C14.1278 12 12.5659 10.433 12.5659 8.5C12.5659 6.567 14.1278 5 16.0545 5C17.9812 5 19.5432 6.567 19.5432 8.5C19.5432 10.433 17.9812 12 16.0545 12Z"
                            fill="black"
                          />
                        </svg>

                        <span className="purchase__number">31</span>
                      </span>
                      <span className="likes">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
                            fill="black"
                          />
                        </svg>
                        <span className="likes__number">29</span>
                      </span>
                    </span>

                    <span className="ratingInfo">
                      <span className="rating">
                        <span>Ratings:</span>
                        <span>4.0</span>
                      </span>
                      <Stars />
                    </span>
                  </span>
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
