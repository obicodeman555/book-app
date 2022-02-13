import "./searchInput.scss";
import React, { useState } from "react";

const SearchInput = (props) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const clearInputHandler = () => {
    setInput("");
  };
  return (
    <form className={`search ${props.className}`}>
      <input
        type="text"
        className="search__input"
        placeholder="Search books, genres, authors, etc."
        onChange={inputChangeHandler}
        value={input}
      />

      <button type="button" className="search__cta" onClick={clearInputHandler}>
        {input.length > 0 ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.5902L6.40981 5L5 6.40981L10.5902 12L5.00005 17.5902L6.40986 19L12 13.4098L17.5901 19L19 17.5901L13.4098 12L19 6.40986L17.5902 5.00005L12 10.5902Z"
              fill="black"
            />
          </svg>
        ) : (
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
              d="M11.2818 18.7779C12.8124 18.7779 14.2253 18.2599 15.3556 17.4122L18.1578 20.2144L19.5 18.8721L16.6978 16.0699C17.5455 14.9396 18.0636 13.5268 18.0636 11.9961C18.0636 8.25203 15.0259 5.21436 11.2818 5.21436C7.53768 5.21436 4.5 8.25203 4.5 11.9961C4.5 15.7403 7.53768 18.7779 11.2818 18.7779ZM11.2818 7.09819C13.9898 7.09819 16.1797 9.28814 16.1797 11.9961C16.1797 14.7042 13.9898 16.8941 11.2818 16.8941C8.57378 16.8941 6.38383 14.7042 6.38383 11.9961C6.38383 9.28814 8.57378 7.09819 11.2818 7.09819Z"
              fill="black"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default SearchInput;
