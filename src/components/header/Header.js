import React, { useState } from "react";
import "./header.scss";
import SearchInputMobile from "./small-screen-header/SmallScreenHeader";
import LargeScreenHeader from "./large-screen-header/LargeScreenHeader";

const Header = ({ cartHandler, children }) => {
  const [showMobileSearchHeader, setShowMobileSearchHeader] = useState(false);

  const mobileHeaderHandler = () => {
    setShowMobileSearchHeader(!showMobileSearchHeader);
  };
  return (
    <>
      {showMobileSearchHeader ? (
        <SearchInputMobile
          mobileHeaderHandler={mobileHeaderHandler}
          showMobileSearchHeader={showMobileSearchHeader}
        />
      ) : (
        <LargeScreenHeader
          mobileHeaderHandler={mobileHeaderHandler}
          cartHandler={cartHandler}
        />
      )}
      <div>{children}</div>
    </>
  );
};

export default Header;
