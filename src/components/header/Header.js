import React, { useState } from "react";
import "./header.scss";
import SearchInputMobile from "./small-screen-header/SmallScreenHeader";
import LargeScreenHeader from "./large-screen-header/LargeScreenHeader";
// import { GET_CART_HIDDEN } from "graphql/queries";
// import { useQuery } from "@apollo/client";

const Header = ({ children }) => {
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
        <LargeScreenHeader mobileHeaderHandler={mobileHeaderHandler} />
      )}
      <div>{children}</div>
    </>
  );
};

export default Header;
