import "./searchInput.scss";
import React from "react";
import searchIcon from "assets/svgs/search.svg";

const SearchInput = (props) => {
  return (
    <form className={`search ${props.className}`}>
      <input
        type="search"
        className="search__input"
        placeholder="Search books, genres, authors, etc."
      />

      <button type="button" className="search__button">
        <img src={searchIcon} alt="" srcset="" />
      </button>
    </form>
  );
};

export default SearchInput;
