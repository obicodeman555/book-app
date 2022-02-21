import "./largeScreenHeader.scss";
import React from "react";
import brandFullLogo from "assets/svgs/brand-full.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "components";
import { cartHiddenVar } from "graphql/cache";

const LargeScreenHeader = ({ mobileHeaderHandler }) => {
  return (
    <header className="app__header">
      <nav>
        <div className="navigation__wrapper">
          {/* Link component take user to homepage if clicked */}
          <Link to="/" className="logo nav__item">
            <img src={brandFullLogo} alt="brand full logo" />
          </Link>
          {/*
            button hides on screen size approaching tablet size
            button toggles a search input form on click
          */}
          <button
            className="searchIcon__showOnMonile"
            onClick={mobileHeaderHandler}
          >
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
          </button>
          {/* Search input hides it self on less screen sizes below tablet 
              serach changes to the close icon once a user inputs a letter
          */}
          <SearchInput id="header__search" className="nav__item" />
          {/*
          parent container for cart and book icon
          conatiner is a flexed item and also a flex container
          */}
          <div className="nav__item cartIcon__toggler">
            <button
              type="button"
              className="cartToggle__icon"
              onClick={() => cartHiddenVar(!cartHiddenVar())}
            >
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
                  d="M19.5545 13.3568L6.90606 14.6356C6.56202 14.6699 6.2604 15.0034 6.2604 15.3489C6.2604 15.662 6.51515 15.917 6.82828 15.917H19.4693C19.9404 15.917 20.3216 16.2986 20.3216 16.7691C20.3216 17.2396 19.9404 17.6214 19.4693 17.6214H6.82828C6.81374 17.6214 6.79899 17.621 6.78444 17.6202C5.56667 17.597 4.58061 16.6109 4.55737 15.3931C4.55677 15.3784 4.55636 15.3636 4.55636 15.3491C4.55636 14.758 4.78141 14.1836 5.1903 13.7317C5.59939 13.2798 6.14828 12.9986 6.73657 12.9398L7.14545 12.899L4.48384 3.70424H2.85212C2.38141 3.70424 2 3.32263 2 2.85212C2 2.38162 2.38141 2 2.85212 2H5.12424C5.50364 2 5.83737 2.25091 5.94263 2.61515L6.42242 4.27212H19.4693C19.9404 4.27212 20.3216 4.65354 20.3216 5.12424V12.5089C20.3216 12.9469 19.9897 13.3131 19.5545 13.3568ZM18.6174 5.97636H6.91556L8.8697 12.7267L18.6174 11.7378V5.97636Z"
                  fill="black"
                />
                <path
                  d="M4.98223 22C6.00189 22 6.82849 21.1734 6.82849 20.1537C6.82849 19.1341 6.00189 18.3075 4.98223 18.3075C3.96257 18.3075 3.13597 19.1341 3.13597 20.1537C3.13597 21.1734 3.96257 22 4.98223 22Z"
                  fill="black"
                />
                <path
                  d="M18.4754 22C19.495 22 20.3216 21.1734 20.3216 20.1537C20.3216 19.1341 19.495 18.3075 18.4754 18.3075C17.4557 18.3075 16.6291 19.1341 16.6291 20.1537C16.6291 21.1734 17.4557 22 18.4754 22Z"
                  fill="black"
                />
              </svg>
              <span className="numberOfCartItems">3</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LargeScreenHeader;
