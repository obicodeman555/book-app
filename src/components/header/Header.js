import React from "react";
import "./header.scss";
import brandFullLogo from "assets/svgs/brand-full.svg";

import brandLiteIcon from "assets/svgs/brand-icon.svg";
import cartIcon from "assets/svgs/cart.svg";

import { Link } from "react-router-dom";
import { SearchInput } from "components";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo nav__item">
          <img src={brandFullLogo} alt="" srcset="" />
        </Link>
        <SearchInput className="nav__item" />
        <div className="nav__item">
          <span>
            <img src={brandLiteIcon} alt="" />
          </span>
          <span>
            <img src={cartIcon} alt="" />
            <span className="number__cartItem">3</span>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
